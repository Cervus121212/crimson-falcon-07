// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the YouTube video, not this program. This program does
// exactly one thing: it copies VIDEO.json from the repository root into
// the grader's output directory, where the house reads the video's
// address and then reads the video itself through the YouTube Data API.
// Nothing written here about the video is scored.
//
// VIDEO.json ships here with a placeholder address; the parent replaces
// it with the real Short's address after Faizah uploads the clip and
// sends back its URL. Until then the gate refuses this entry as it
// stands (valid 0), which is expected.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success and exits non-zero on failure.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const repoDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const videoFile = 'VIDEO.json';

mkdirSync(outDir, { recursive: true });
try {
  copyFileSync(join(repoDir, videoFile), join(outDir, videoFile));
} catch (err) {
  console.error(`could not copy ${videoFile} from ${repoDir}: ${(err as Error).message}`);
  process.exit(1);
}
