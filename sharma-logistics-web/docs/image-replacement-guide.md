# Image Replacement Guide

Every image on the site today is either a labeled placeholder block or
absent by design (empty states). Here's exactly where real photos go
and what to shoot.

## Where placeholders live
- **Packing Proof** (homepage `PackingProof` component): 10 items
  (television, refrigerator, washing machine, sofa, furniture, crockery,
  fragile items, bike, office computers, commercial goods) — each
  currently a grey `[INSERT_REAL_MOVE_PHOTO]` block. Shoot one real
  before/during-packing photo per item type.
- **Real moves** (`RealMoveCard`, used on the homepage and every
  service/route/region page once a move exists in
  `src/content/moves.ts`): each `RealMove.images` array should have at
  least one real photo of that specific job.
- **Logo / brand assets**: already real (inline SVG, no placeholder) —
  see the Phase 2 brand-mark deliverable.

## What to shoot (in priority order)
1. **10-15 real completed moves**, each with: a labeled/loaded truck or
   packed room, the crew at work, and — with the customer's explicit
   permission — a "before handover" shot of the delivered space. This
   single shoot batch fills both Packing Proof (crop the packing-in-
   progress shots) and Real Moves (use the full sequence).
2. **Team and vehicles** for the About page and Google Business Profile
   (not currently a dedicated website section, but useful GBP content
   per `google-business-profile-checklist.md`).

## Technical notes for whoever adds the files
- Real move photos: add to `public/images/moves/` (create the folder),
  reference by path in `src/content/moves.ts`'s `images: [{ src, alt }]`
  array. `RealMoveCard` already uses `next/image` with a fixed
  `aspect-[4/3]` container, so any reasonably-sized photo drops in
  without layout shift.
- Packing Proof photos: swap the placeholder `<div>` in
  `src/components/home/PackingProof.tsx` for a real `next/image`,
  matching the existing `h-32` sizing.
- Always write real, descriptive `alt` text (what's in the photo, not
  "image123.jpg") — screen-reader users and image search both depend on
  it.
- Compress before committing (the project has no image-optimization
  pipeline beyond `next/image`'s runtime resizing) — keep source photos
  under ~500KB each.

## What never needs a photo
Every service, route, and location page already renders correctly with
zero images — the honest empty states are a deliberate design decision
(see `content-marketing-playbook.md`), not a placeholder for a required
element. Photos improve conversion; they were never a blocker to launch.
