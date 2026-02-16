export function formatSize(raw: number) {
  const sizeClass = ["B", "KB", "MB", "GB", "TB", "PB"];
  let index = 0;
  let size = raw;

  while (size > 1000) {
    size = size / 1000;
    index++;
  }

  return `${size}${sizeClass[index]}`;
}
