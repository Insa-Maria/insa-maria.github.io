const projectImageModules = import.meta.glob(
  "../assets/high-resolution/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default"
  }
);

const imageEntries = Object.entries(projectImageModules)
  .map(([path, src]) => [path.split("/").pop(), src])
  .sort(([firstName], [secondName]) => firstName.localeCompare(secondName));

export const projectAssetFiles = imageEntries.map(([fileName]) => fileName);
export const projectImageSources = imageEntries.map(([, src]) => src);
export const projectImageThumbSources = imageEntries.map(([fileName]) =>
  getProjectThumbnailSrc(fileName)
);

const projectImagesByFileName = Object.fromEntries(imageEntries);

export function getProjectImageSrc(fileName) {
  return projectImagesByFileName[fileName] ?? `/assets/full/${fileName}`;
}

export function getProjectThumbnailSrc(fileName) {
  const thumbnailName = fileName.replace(/\.[^.]+$/, ".jpg");
  return `/assets/thumbs/${thumbnailName}`;
}

export function resolveProjectImageSrc(src) {
  if (!src) return src;

  const fileName = decodeURIComponent(src.split("/").pop());
  return projectImagesByFileName[fileName] ?? src;
}

export function resolveProjectThumbnailSrc(src) {
  if (!src) return src;

  const fileName = decodeURIComponent(src.split("/").pop());
  return getProjectThumbnailSrc(fileName);
}
