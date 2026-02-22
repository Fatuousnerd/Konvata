export function formatSize(raw: number) {
  const sizeClass = ["B", "KB", "MB", "GB", "TB", "PB"];
  let index = 0;
  let size = raw;

  while (size > 1024) {
    size = size / 1024;
    index++;
  }

  return `${size.toFixed(2)}${sizeClass[index]}`;
}
