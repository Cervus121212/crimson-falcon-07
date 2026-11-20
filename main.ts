import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The grader hands us the repo under MAKEFUN_BOT_DIR (default /bot) and
// expects the deliverable under MAKEFUN_OUTPUT_DIR (default /output).
// This entry's only deliverable is VIDEO.json with the YouTube URL.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const from = join(botDir, "VIDEO.json");
const to = join(outDir, "VIDEO.json");

if (!existsSync(from)) {
  throw new Error(`VIDEO.json missing in ${botDir} — upload the clip and fill it in first`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(from, to);
console.log(`VIDEO.json copied to ${to}`);
