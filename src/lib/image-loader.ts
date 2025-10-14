import fs from "fs"
import path from "path"

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".ico",
  ".bmp",
  ".tif",
  ".tiff",
  ".avif",
])

// Scans public/<baseSubPath>/<category>/<id>/* for image files
// Returns a map: id -> array of URL paths (e.g., /news/award/1/pic.jpg)
export function getCategorizedIdImagesMapSync(baseSubPath: string): Record<number, string[]> {
  const publicDir = path.join(process.cwd(), "public")
  const baseDir = path.join(publicDir, baseSubPath)
  const map: Record<number, string[]> = {}

  if (!fs.existsSync(baseDir)) return map

  const categories = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  for (const category of categories) {
    const categoryDir = path.join(baseDir, category)
    let idDirs: fs.Dirent[] = []
    try {
      idDirs = fs.readdirSync(categoryDir, { withFileTypes: true })
    } catch {
      continue
    }

    for (const entry of idDirs) {
      if (!entry.isDirectory()) continue
      const idNum = Number(entry.name)
      if (!Number.isInteger(idNum)) continue

      const folder = path.join(categoryDir, entry.name)
      let images: string[] = []
      let files: fs.Dirent[] = []
      try {
        files = fs.readdirSync(folder, { withFileTypes: true })
      } catch {
        continue
      }

      for (const file of files) {
        if (!file.isFile()) continue
        const ext = path.extname(file.name).toLowerCase()
        if (!IMAGE_EXTENSIONS.has(ext)) continue

        const absolute = path.join(folder, file.name)
        const relToPublic = path.relative(publicDir, absolute).replace(/\\/g, "/")
        images.push("/" + relToPublic)
      }

      images.sort()
      if (images.length) {
        map[idNum] = images
      }
    }
  }

  return map
}

