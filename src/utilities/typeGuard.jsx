export function isEmpty(target) {
  if (target === typeof String) {
    return target.length === 0;
  }
  if (Array.isArray(target)) {
    return target.length === 0;
  }
}
