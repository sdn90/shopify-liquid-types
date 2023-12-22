import { expect, test } from "bun:test";
import { mkdtemp } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { shopifyDocsToTypescript } from "./generate-types";

test(
  "should build a valid ts file",
  async () => {
    const shopifyObjects = await Bun.file("docs/objects.json").json();
    const tmpPath = await mkdtemp(
      path.join(os.tmpdir(), "shopify-liquid-types-")
    );
    const tsFile = await shopifyDocsToTypescript(shopifyObjects);
    const filePath = path.join(tmpPath, "shopify-liquid-types.ts");
    Bun.write(filePath, tsFile);

    const { exited } = Bun.spawn(["bunx", "tsc", filePath]);
    const exitCode = await exited;

    expect(exitCode).toBe(0);
  },
  { timeout: 60_000 }
);
