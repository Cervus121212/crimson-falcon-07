# GTA 6 — One Last Job (clip v2)

A 24-second vertical Short cut from Rockstar's GTA VI Trailer 2. This is the
remake: v1 was one pretty sunset shot plus text and had no story, so v2 was
rebuilt from scratch around a real arc — Jason & Lucia's last job.

## Story

"One Last Job": a couple living the Vice City dream decides on one final
score. The plan is made, they drive out — and then everything goes wrong.
Jet ski, motorbike, speedboat, police helicopter: they run. The clip lands
on the golden-hour aerial of Vice City and the VI logo, then the pitch:
you can make clips like this with AI and earn money on make.fun.

Why a viewer stays: the first frame is faces and neon (a nightclub dance),
the second beat is calm and golden (the dream), then the pace doubles every
beat until the chase. The logo is the payoff — it only appears after the
run, so the viewer has to watch to the end to get it.

## Storyboard

All footage is GTA VI Trailer 2 (YouTube VQRLujxTm3c), fetched in-session
with yt-dlp at 1080p. Times below are source timestamps in Trailer 2.

| # | Clip time | Source | Shot | On-screen text |
|---|-----------|--------|------|----------------|
| 1 | 0.0–3.0 | 100–103 | Jason & Lucia dancing in the nightclub | VICE CITY. |
| 2 | 3.0–4.7 | 83.3–85 | The two of them sitting on the dock at sunset | THE DREAM. |
| 3 | 4.7–8.7 | 130–134 | Living room, TV showing a gun store, beers on the table | THE PLAN. |
| 4 | 8.7–12.7 | 28–32 | Jason driving, Lucia in pink behind him | ONE LAST JOB. |
| 5 | 12.7–14.3 | 140.2–141.8 | Jet ski jump, helicopter in the sky | RUN. |
| 6 | 14.3–16.0 | 142–143.7 | Jason on the motorbike, seaplane beside him | RUN. |
| 7 | 16.0–17.7 | 147.5–149.2 | Speedboat chased by a police helicopter, then a bike wheelie fleeing the police | THE HEAT IS ON. |
| 8 | 17.7–20.2 | 153.5–156 | Golden-hour aerial of the Vice City bridge | — |
| 9 | 20.2–24.2 | 156.5–160.5 | The VI logo on black | make.fun pitch (see below) |

## Pitch (inside the clip, last 3.5 s)

```
Make clips like this with AI
and earn money on make.fun
make.fun/bounty/
gta6-clipper-01
```

## How it was made

- Story designed with the muse-video-skill pipeline (idea → script →
  storyboard → cut list).
- Cut with the ffmpeg-skill tools: `scenes.py` to find the shots,
  `cut.py` for frame-accurate segments, `fit.py` to crop 16:9 to 9:16,
  `caption.py` for the burned-in text, `loudness.py` to normalize,
  `check.py` to verify the Shorts profile.
- Text sizes were tuned for the 1080x1920 frame: story lines at size 18
  (big, centered), pitch at size 9 in four short lines at the bottom
  (margin 33) so nothing wraps and nothing is cut off by the Shorts UI.
- Audio is the trailer's own audio, normalized to -14 LUFS.

## Verification

- `check.py --platform shorts`: all checks PASS (duration 24.21 s, 9:16,
  1080x1920, 30 fps, H.264 + AAC, loudness -14.0 LUFS, true peak
  -1.1 dBTP). One WARN only: no soft subtitle track (captions are
  burned in, which is the deliverable).
- Every beat was frame-checked in the final render: text readable and in
  the safe area, subjects centered after the crop, logo not covered by
  the pitch text, pitch fully visible (all four lines, no wrapping).
- `gta6-clipper-01-v2.mp4`: 24.21 s, 1080x1920, 15.959.551 bytes,
  sha256 `0fdd6d752b797494abf21252e50353561081472ff681af57ebf1de70c14056ed`.

## YouTube upload (for Faizah)

Title:

```
GTA 6: One Last Job (Lucia's Free) #GTA6 #Shorts
```

Description (exact bounty line + play code):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-runway-macaroni-barge
```

Upload as Public, keep it public until results are out, and reply with the
video URL — the URL goes into VIDEO.json, then the entry is bundled and
submitted. `VIDEO.json` is still a placeholder until then.

## Known limitations (honest)

- Beat 4 (driving): the 9:16 center crop keeps Lucia in frame but Jason
  sits at the right edge of the 16:9 frame, so only his profile edge is
  visible. The beat still reads — Lucia in pink, car interior, on the road.
- Beat 7 contains a mid-beat cut the scene detector missed: the speedboat
  chase becomes a bike wheelie about halfway through. Both are escape
  shots, so it reads as fast cutting, not as a mistake.
- The clip uses Rockstar's Trailer 2 footage, which is what the bounty
  asks for (cut a GTA 6 moment from Rockstar gameplay/livestreams).

## Files

- `gta6-clipper-01-v2.mp4` — the v2 clip (this entry's video).
- `gta6-clipper-01.mp4` — v1, kept as-is (rejected: no story).
- `cues-story.srt`, `cues-pitch.srt` — the subtitle sources used for v2.
- `main.ts` — copies `VIDEO.json` from the bot dir to the output dir.
- `VIDEO.json` — placeholder; filled with the YouTube Shorts URL after upload.
- `trailer2.mp4` — the 640x360 Trailer 2 source from v1. The v2 source
  (`trailer2-v2.mp4`, 1080p) was fetched in-session and is not committed
  (55 MB); the cut list above reproduces the edit from either.
