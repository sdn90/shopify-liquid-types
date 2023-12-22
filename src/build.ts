import { shopifyDocsToTypescript } from "./generate-types";

const shopifyObjects = await Bun.file("docs/objects.json").json();
const tsFile = await shopifyDocsToTypescript(shopifyObjects);
await Bun.write("dist/shopify-liquid-types.ts", tsFile);
console.log(Date.now(), "wrote to docs/shopify-liquid-types.ts");
