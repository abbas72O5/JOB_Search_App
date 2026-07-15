export const checkImageURL = (url) => {
  if (!url) return false;
  return (url.startsWith("http") || url.startsWith("https"));
};

