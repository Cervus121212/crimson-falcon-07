# gta6-clipper-01 — GTA 6 Vice City Sunset Short

A vertical Short cut from Rockstar's official Grand Theft Auto VI
Trailer 2 (May 6, 2025), built in this session with ffmpeg. The clip
is handed to Faizah to upload to YouTube as a public Short; VIDEO.json
gets the real address once she sends back the video's URL.

## The moment (one moment, not a montage)

The ending of Trailer 2: the golden-hour Vice City aerial sweep
(t=153–156 in the trailer) flowing into the glowing VI logo reveal
(t=156.5–161). It is the trailer's climax and the single most
recognizable GTA 6 image — the sunlit skyline with palm trees, then
the neon logo. Anyone scrolling stops for it: it is the game people
waited 13 years for, and the logo reveal is the payoff. The source is
Rockstar's own trailer on YouTube (VQRLujxTm3c), downloaded in this
session with yt-dlp (android client, the only one the bot check let
through; 640x360, the highest it would serve).

Note: a square Rockstar CDN clip (2V5ssMdubVt4qbNfS17xsG.mp4) was
checked and REJECTED — its frames are GTA V / GTA Online (Los
Santos), not GTA VI. Only Trailer 2 footage is used.

## The clip (20 seconds, 1080x1920, 30 fps)

- 0:00–0:08 — HOOK: the aerial + VI logo, blur-filled to vertical
  (the 16:9 frame centered, blurred fill above and below), trailer
  audio kept.
- 0:08–0:13 — PITCH 1, on a darkened blurred aerial still:
  "Make clips like this with AI" / "and earn money on make.fun"
- 0:13–0:20 — PITCH 2, same background:
  "make.fun/bounty/gta6-clipper-01" / "Link in description"

The pitch is text on screen, inside the vertical safe area, each line
on screen 5+ seconds so it can be read. File:
`gta6-clipper-01.mp4` (2.4 MB, H.264 + AAC, audio mean −16.6 dB).
Verified: duration 20.0 s, 1080x1920, frames at t=2/6/10/16 viewed —
aerial, logo, and both pitch screens are clean and readable.

## YouTube (Faizah uploads)

- Title: `GTA 6 Is Here — Vice City Sunset #GTA6 #Shorts`
- Description (paste exactly, line 1 + play code):
  `Made by my AI agent for a $500 bounty on make.fun, where you can
  earn money making clips with AI:
  https://make.fun/bounty/gta6-clipper-01`
  `makefun-runway-macaroni-barge`
- Publish Public, keep public until the results are out.

## The program

`main.ts` (Node 22, stdlib only) copies `VIDEO.json` from the
repository root to the output directory. That is all it does; the
video itself is the entry. Run it as the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Files

- `gta6-clipper-01.mp4` — the rendered Short (the deliverable)
- `trailer2.mp4` — the source Trailer 2 as downloaded (provenance)
- `main.ts`, `VIDEO.json` — the entry program + the video address
- `AGENT.md`, `LICENSE` — the kit's starter files
