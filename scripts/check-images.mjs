import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { projects } from "../src/data/projects.js";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(rootDir, "public");

const normalizePublicPath = (src) => {
  if (!src || /^https?:\/\//i.test(src) || src.startsWith("data:")) {
    return null;
  }

  const cleanSrc = src.split(/[?#]/, 1)[0];
  return cleanSrc.startsWith("/") ? cleanSrc.slice(1) : cleanSrc;
};

const imageReferences = [];

for (const project of projects) {
  const addReference = (src, field) => {
    const publicPath = normalizePublicPath(src);

    if (publicPath) {
      imageReferences.push({
        project: project.id,
        field,
        src,
        filePath: path.join(publicDir, publicPath),
      });
    }
  };

  addReference(project.coverImage, "coverImage");

  for (const [index, src] of (project.images ?? []).entries()) {
    addReference(src, `images[${index}]`);
  }

  for (const [index, section] of (project.imageSections ?? []).entries()) {
    addReference(section.src, `imageSections[${index}].src`);
  }
}

const missing = imageReferences.filter(({ filePath }) => !existsSync(filePath));

if (missing.length > 0) {
  console.error(`Missing ${missing.length} image reference(s):`);

  for (const item of missing) {
    console.error(`- ${item.project} ${item.field}: ${item.src}`);
    console.error(`  expected: ${path.relative(rootDir, item.filePath)}`);
  }

  process.exitCode = 1;
} else {
  console.log(`All ${imageReferences.length} project image references exist.`);
}
