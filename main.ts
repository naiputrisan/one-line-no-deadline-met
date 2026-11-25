import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The deadline didn't sneak up on me — I watched it approach for two weeks, waved at it, and let it walk right past.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only white space. Fail loudly here rather than
// shipping an entry the sealed scorer would refuse.
const text = LINE.trim();
if (text.length < 1 || text.length > 200 || text.includes("\n")) {
  throw new Error(`entry line invalid: ${text.length} chars`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, text + "\n", "utf8");
