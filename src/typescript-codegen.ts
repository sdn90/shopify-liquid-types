export interface TsInterface {
  name: string;
  comment?: string;
  properties?: {
    name: string;
    type: string;
    required: boolean;
    comment?: string;
  }[];
}

export function genInterface(inter: TsInterface) {
  return `${genComments(inter.comment)}export interface ${snakeToPascal(
    inter.name
  )} {
    ${genInterfaceProperties(inter)}
  }`;
}

export function genInterfaceProperties(inter: TsInterface) {
  const property = inter.properties
    ?.map(
      (property) =>
        `${genComments(property.comment)}${property.name}: ${property.type};`
    )
    .join("\n");

  return property;
}

export function snakeToPascal(str: string) {
  return str
    .split("_")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join("");
}

export function genComments(comment?: string): string {
  if (!comment) return "";
  // return `/**\n*${comment}\n*/\n`;
  return `/**\n* ${comment.replace(/\n/g, "\n* ")}\n*/\n`;
}
