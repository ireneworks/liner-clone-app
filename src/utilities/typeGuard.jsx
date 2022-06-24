export function isEmpty(target) {
  if (target === typeof String) {
    return target.length === 0;
  }
}
