# GTA 6 — One Last Job (clip v3)

A 29.5-second vertical Short cut from Rockstar's GTA VI Trailer 2. This is
the second remake: v1 was one pretty sunset shot plus text and had no story;
v2 was a fast 9-beat chase montage (24.2 s, hard cuts, center-crop) and
Faizah asked for a fresh one — same title, but better and smoother. So v3
was rebuilt from scratch around a slower, cinematic arc with crossfades
between every beat, text that fades in and out, and the full 16:9 frame
preserved on a blurred background instead of a center crop.

## Story

"One Last Job": Lucia walks out of prison at golden hour and Jason is
waiting at the gate. They live the good life — beach, beers, the city —
then one night out, then the call comes, then the job. The clip lands on
the golden-hour aerial of Vice City and the VI logo, then the pitch: you
can make clips like this with AI and earn money on make.fun.

Why a viewer stays: the first frame is a face and a prison gate at golden
hour — the trailer's most emotional image — and the pace breathes. Six
beats of about five seconds each, each one a complete little moment, and
the dissolves pull the viewer forward instead of cutting away. The title
beat ("ONE LAST JOB.") lands late, in beat 5 of 6, so the viewer has to
watch to the end to get the payoff, and the logo closes it.

## Storyboard

All footage is GTA VI Trailer 2 (YouTube VQRLujxTm3c). Times below are
source timestamps in Trailer 2. The 1080p source file used here
(`trailer2-v2.mp4`) was fetched in-session by the v2 builder; a re-fetch
in this session only yields 360p (YouTube's SABR experiment now limits the
android client to format 18 — the ios/tv/web clients are bot-blocked), so
the 1080p file already in the repo was used and this is documented honestly.

| # | Clip time | Source | Shot | On-screen text |
|---|-----------|--------|------|----------------|
| 1 | 0.0–5.2 | 60.8–66.0 | Jason waits at the prison gate, then Lucia walks out at golden hour | SHE'S OUT. |
| 2 | 5.2–10.4 | 38.6–44.5 | Beach workout at sunset, then walking out of the store with beers | THE GOOD LIFE. |
| 3 | 10.4–15.6 | 89.5–95.5 | The bar at night — drinks, dancing, neon | ONE NIGHT. |
| 4 | 15.6–20.8 | 124.8–129.2 | Night drive, then the pink neon motel exterior | THEN THE CALL. |
| 5 | 20.8–26.0 | 106.5–111.5 | Police, then the confrontation | ONE LAST JOB. |
| 6 | 26.0–29.5 | 153.5–160.5 | Golden-hour aerial, then the VI logo on black | make.fun pitch (see below) |

Every join between beats is a 0.8 s crossfade (`join.py --transition
fade --duration 0.8`); the six beats total 33.5 s of clips playing as
29.5 s. Story text fades in and out (`caption.py --animate fade`); the
pitch fades in at the logo and stays readable to the end.

## What is different from v2

- **Story:** v2 was plan → chase (jet ski, motorbike, speedboat, police
  helicopter). v3 is release → the good life → one night out → the call
  → the job. No chase montage at all; only one scene (the aerial +
  logo ending) is shared, and it is cut differently.
- **Pacing:** 6 beats in 29.5 s (about 5 s each) instead of 9 beats in
  24.2 s (about 2.7 s each). The clip breathes.
- **Transitions:** 0.8 s dissolves between every beat instead of hard
  cuts. Audio crossfades with the picture.
- **Framing:** blur-fill vertical (the whole 16:9 frame centered on a
  blurred, darkened copy of itself — nothing cropped) instead of a
  center crop that threw away 70% of the width.
- **Text:** story lines fade in and out instead of popping; pitch is the
  same four lines but fades in over the logo.
- **Source:** same Trailer 2, but the 1080p file from the repo (see above).

## Pitch (inside the clip, last ~4 s)

```
Make clips like this with AI
and earn money on make.fun
make.fun/bounty/
gta6-clipper-01
```

## How it was made

- Story designed with the muse-video-skill pipeline (idea → script →
  storyboard → cut list); the trailer was first split into a 50-shot
  contact sheet (`scenes.py --shots`, one frame per shot) and every beat
  was picked from frames actually seen, not from memory.
- Cut with the ffmpeg-skill tools: `probe.py` (source: 1920x1080, 30 fps,
  166.75 s), `cut.py --accurate` for the six frame-accurate segments,
  `join.py --transition fade --duration 0.8` for the dissolves,
  `fit.py --aspect 9:16 --fit blur` for the vertical frame, `caption.py`
  for the burned-in text (story: center, bold, size 16, fade; pitch:
  bottom, size 9, margin 33, `--max-lines 4`, fade), `loudness.py` to
  normalize, `check.py` to verify the Shorts profile, `look.py` to
  inspect the frames.
- One fix during verification: the first pitch render showed only two of
  the four lines at a time — `caption.py` splits any cue longer than
  `--max-lines` (default 2) into sequential halves. Re-rendered with
  `--max-lines 4`; all four lines now show together for the full 4.1 s.
- Audio is the trailer's own audio, crossfaded at every joint,
  normalized to -14 LUFS (true peak -1.0 dBTP).

## Verification

- `check.py --platform shorts`: all 12 checks PASS (duration 29.50 s,
  9:16, 1080x1920, 30 fps constant, H.264 + AAC stereo 48 kHz, loudness
  -13.9 LUFS, true peak -1.0 dBTP, 17.1 MB). One WARN only: no soft
  subtitle track (captions are burned in, which is the deliverable).
- Every beat was frame-checked in the final render (`look.py` sheet +
  full-res frames): all five story lines readable and centered over the
  picture; the mid-dissolve frame (t=4.8) shows a true blend of the
  prison gate and the beach; the pitch frame (t=27.5) shows all four
  lines together, readable, in the safe area below the VI logo.
- `gta6-clipper-01-v3.mp4`: 29.50 s, 1080x1920, 17,887,903 bytes,
  sha256 `282e413cc04014bf0e003e494857c50c0d572fd771632c260b4017e74c5cccd5`.

## YouTube upload (for Faizah)

Title:

```
GTA 6: One Last Job #GTA6 #Shorts
```

Description (exact bounty line + play code):

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

Play code: makefun-runway-macaroni-barge
```

Upload as Public, keep it public until results are out, and reply with
the video URL — the URL goes into VIDEO.json, then the entry is bundled
and submitted. `VIDEO.json` is still a placeholder until then. v1 and v2
are NOT to be uploaded — this v3 replaces them.

## Files

- `gta6-clipper-01-v3.mp4` — the v3 clip (this entry's video).
- `gta6-clipper-01-v2.mp4` — v2, kept as-is (superseded: too fast).
- `gta6-clipper-01.mp4` — v1, kept as-is (rejected: no story).
- `v3-cues-story.srt`, `v3-cues-pitch.srt` — the subtitle sources used
  for v3 (written in this session).
- `main.ts` — copies `VIDEO.json` from the bot dir to the output dir
  (written fresh in the v2 session; tested again in this session).
- `VIDEO.json` — placeholder; filled with the YouTube Shorts URL after
  upload.
- `trailer2-v2.mp4` — the 1080p Trailer 2 source (fetched in-session by
  the v2 builder; not committed to git, 55 MB). The 640x360 file
  `trailer2.mp4` is v1's source.
