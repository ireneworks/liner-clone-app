export const encodedString = (source) => {
  return !!source ? encodeURIComponent(source.replaceAll(" ", "-")) : source;
};

export const decodedString = (source) => {
  return !!source ? decodeURIComponent(source.replaceAll("-", " ")) : source;
};
