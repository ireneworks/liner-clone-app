export function isEmpty(target) {
  if (typeof target === "string") {
    return target.length === 0;
  }
  if (Array.isArray(target)) {
    return target.length === 0;
  }
}
