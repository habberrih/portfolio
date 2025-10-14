# Images: Dynamic Loading Guide

This project supports dynamic image loading from the `public/` folder for any section that displays image galleries (e.g., News, Projects). Dynamic images are loaded from a predictable folder structure, and static images in the component act as a fallback.

- Dynamic source: `public/<section>/<category>/<id>/*.{png,jpg,jpeg,gif,svg,webp,ico,bmp,tif,tiff,avif}`
- Fallback: the component’s static `images` array (and `image` for thumbnail)
- Resolver: `src/lib/image-loader.ts#getCategorizedIdImagesMapSync`

## Folder Structure

- News: `public/news/<category>/<id>/...`
  - Categories: `award`, `volunteer`, `travel`
  - Example: `public/news/award/2/01-hero.jpg`
- Projects: `public/projects/<category>/<id>/...`
  - Categories: `dev-tools`, `automation`, `nest`, `node`, `iot`
  - Example: `public/projects/node/2/01-screenshot.png`
- Personal photos: `public/me/...` (e.g., `public/me/profile.jpg`)
- Resume/CV: `public/resume/cv.pdf`

Notes

- Files are sorted alphabetically; prefix names with `01-`, `02-`, etc. to control carousel order and thumbnail.
- Category folder names must match the section’s `Category` type, and `id` folders must be numeric.

## How Dynamic + Static Works

For each item (news or project):

- If `public/<section>/<category>/<id>/` contains images, those are used.
- Otherwise, it falls back to the component’s static `images` array.
- Each static entry can be either:
  - An absolute path (e.g., `/my-image.jpg`), or
  - A bare filename (e.g., `01-hero.jpg`). Bare filenames resolve to `/<section>/<category>/<id>/<filename>` automatically.

The first resolved image becomes the card thumbnail, unless `image` is explicitly provided and dynamic images exist.

## Add Dynamic Images for a New Section

Suppose you add a new section called `AwardsSection` with categories and items similar to News.

1. Place images under `public/<section>/<category>/<id>/`

- Example for a section named `awards`:
  - `public/awards/gold/1/01-ceremony.jpg`
  - `public/awards/gold/1/02-team.jpg`

2. Define your items with static fallback

- Prefer bare filenames in the `images` array so they resolve cleanly to your section path when dynamic is not present.

```ts
// awards-section.tsx
'use client';
import { useMemo, useState } from 'react';

export type Category = 'gold' | 'silver' | 'bronze';

type AwardItem = {
  id: number;
  category: Category;
  title: string;
  description: string;
  date: string;
  image?: string; // optional; derived from images[0] if omitted
  images: string[]; // prefer bare filenames like ["01.jpg", "02.jpg"]
};

const items: AwardItem[] = [
  {
    id: 1,
    category: 'gold',
    title: 'Best Project',
    description: '…',
    date: '2025',
    images: ['01-ceremony.jpg', '02-team.jpg'],
  },
];

export function AwardsSection({
  imagesMap,
}: {
  imagesMap?: Record<number, string[]>;
}) {
  const enhancedItems = useMemo(() => {
    const map = imagesMap || {};
    const section = 'awards'; // your folder name under public/

    return items.map((item) => {
      const dyn = map[item.id];
      const base = `/${section}/${item.category}/${item.id}`;
      const srcs = dyn && dyn.length ? dyn : item.images;
      const images = (srcs || []).map((p) =>
        p && (p.startsWith('/') || p.startsWith('http')) ? p : `${base}/${p}`
      );
      const image = images.length ? images[0] : item.image;
      return { ...item, images, image };
    });
  }, [imagesMap]);

  // …render enhancedItems
  return null;
}
```

3. Pass the imagesMap from the page (server side)

```ts
// src/app/page.tsx
import { getCategorizedIdImagesMapSync } from '@/lib/image-loader';

export default function Home() {
  const awardsImages = getCategorizedIdImagesMapSync('awards');
  return <main>{/* <AwardsSection imagesMap={awardsImages} /> */}</main>;
}
```

This mirrors how News and Projects are wired:

- News uses: `getCategorizedIdImagesMapSync("news")`
- Projects use: `getCategorizedIdImagesMapSync("projects")`

## Supported File Types

- `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`, `.ico`, `.bmp`, `.tif`, `.tiff`, `.avif`

Defined in: `src/lib/image-loader.ts`

## Troubleshooting

- Nothing shows for an item:
  - Ensure the `id` folder is numeric and matches the item’s `id`.
  - Ensure the category folder name matches the item’s `category` exactly.
  - Verify that files have a supported extension.
- Wrong order:
  - Prefix filenames with numbers to ensure correct sorting.
- Static fallback paths:
  - If you use absolute paths (e.g., `/image.jpg`) in `images`, they will be used as-is.
  - If you want the fallback to be inside your section folders, use bare filenames.

This guide should make it straightforward to add image galleries to any new section while keeping a clean, predictable folder structure.
