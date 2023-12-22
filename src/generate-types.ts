import { ObjectEntry } from "@shopify/theme-check-common";
import {
  isDictionaryGlobal,
  dictionaryGlobalType,
  isArrayReturnType,
  isOtherReturnType,
  isPrimitive,
} from "./shopify-docs";
import { genInterface, snakeToPascal } from "./typescript-codegen";
import { format } from "prettier";

export const SETUP = `
type Untyped = any;
type ShopifyBug = any;
type Unimplemented = any;
`;

export async function shopifyDocsToTypescript(objects: ObjectEntry[]) {
  const interfaceStrings = objects.map((object) => {
    if (isDictionaryGlobal(object)) return dictionaryGlobalType(object);

    return genInterface({
      name: object.name,
      comment: object.summary,
      properties: object.properties?.map((property) => {
        if (property.return_type) {
          if (property.return_type.length === 0) {
            return {
              name: property.name,
              type: "ShopifyBug",
              required: true,
              comment: property.summary,
            };
          }
          if (property.return_type.length === 1) {
            const returnType = property.return_type[0];

            if (isArrayReturnType(returnType)) {
              return {
                name: property.name,
                type: `${snakeToPascal(returnType.array_value)}[]`,
                required: true,
                comment: property.summary,
              };
            } else if (isOtherReturnType(returnType)) {
              return {
                name: property.name,
                type: isPrimitive(returnType.type)
                  ? returnType.type
                  : snakeToPascal(returnType.type),
                required: true,
                comment: property.summary,
              };
            } else {
              return {
                name: property.name,
                type: "Unimplemented",
                required: true,
                comment: property.summary,
              };
            }
          } else {
            // array length not one
            return {
              name: property.name,
              type: property.return_type
                .map((returnType) => {
                  if (returnType.type === "string") {
                    return `"${returnType.name}"`;
                  } else if (returnType.type === "number") {
                    return returnType.name.toString();
                  } else if (
                    returnType.type === "array" &&
                    "array_value" in returnType
                  ) {
                    if (isPrimitive(returnType.array_value)) {
                      return `${returnType.array_value}[]`;
                    }
                    return `${snakeToPascal(returnType.array_value)}[]`;
                  } else {
                    if ("name" in returnType) {
                      return returnType.name.toString();
                    } else {
                      return "Unimplemented";
                    }
                  }
                })
                .join(" | "),
              required: true,
              comment: property.summary,
            };
          }
        }

        return {
          name: property.name,
          type: "ShopifyBug",
          required: true,
          comment: property.summary,
        };
      }),
    });
  });

  const file = SETUP.concat("\n\n", interfaceStrings.join("\n\n"));
  const formatted = await format(file, { parser: "typescript" });

  return formatted;
}
