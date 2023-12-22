import {
  ArrayReturnType,
  EnumReturnType,
  ObjectEntry,
  OtherReturnType,
  ReturnType,
} from "@shopify/theme-check-common";
import { genInterface, snakeToPascal, genComments } from "./typescript-codegen";

type DictionaryGlobal = ObjectEntry & {
  access: { global: true };
  return_type: [ArrayReturnType];
};
export function isDictionaryGlobal(
  object: ObjectEntry
): object is DictionaryGlobal {
  return (
    object.access?.global === true &&
    (object.return_type?.length ?? 0) > 0 &&
    object.return_type?.[0].type === "array"
  );
}

export function isEnumReturnType(obj: ReturnType): obj is EnumReturnType {
  return obj.type === "string" && "name" in obj;
}

export function isArrayReturnType(obj: ReturnType): obj is ArrayReturnType {
  return obj.type === "array";
}

export function isOtherReturnType(obj: ReturnType): obj is OtherReturnType {
  return (
    (obj.type === "string" ||
      obj.type === "number" ||
      obj.type === "untyped" ||
      obj.type === "boolean" ||
      typeof obj.type === "string") &&
    "name" in obj &&
    obj.name === ""
  );
}

export function dictionaryGlobalType(object: DictionaryGlobal) {
  return `${genComments(object.summary)}export type ${snakeToPascal(
    object.name
  )} = ${snakeToPascal(object.return_type?.[0].array_value)}[];`;
}

export function isPrimitive(type: string) {
  return ["string", "number", "boolean"].includes(type);
}

export interface TemplateContext {
  template: string;
  objects: string[];
}

export function generateTemplateContexts(
  objects: ObjectEntry[]
): TemplateContext[] {
  const templatesMap: Map<string, Set<string>> = new Map();

  for (const object of objects) {
    if (object.access?.template) {
      for (const template of object.access.template) {
        if (!templatesMap.has(template)) {
          templatesMap.set(template, new Set<string>().add(object.name));
        } else {
          templatesMap.get(template)?.add(object.name);
        }
      }
    }
  }
  const globals = objects.filter(
    (object) =>
      typeof object.access === "undefined" || object.access?.global === true
  );
  for (const global of globals) {
    templatesMap.forEach((objects, template) => {
      globals.forEach((global) => {
        objects.add(global.name);
      });
    });
  }

  return Array.from(templatesMap.entries()).map(([template, objects]) => {
    return { template: template, objects: Array.from(objects) };
  });
}

export function generateTemplateContextTypes(contexts: TemplateContext[]) {
  const templateContextTypes = contexts.map((context) => {
    return genInterface({
      name: `${snakeToPascal(
        context.template
          .replaceAll(".liquid", "")
          .replaceAll("/", "_")
          .replaceAll(".", "_")
      )}Context`,
      properties: context.objects.map((object) => {
        return {
          name: object,
          type: snakeToPascal(object),
          required: true,
        };
      }),
    });
  });
  return templateContextTypes.join("\n\n");
}
