export function generateHostname(target) {
  const [hostname] = target.match(/https?:\/\/[^\/$\s]+/gi);
  return hostname;
}
