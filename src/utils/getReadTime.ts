const getReadTime = (content: string): number => {
  const words = content.replace(/[^\w ]/g, "").split(/\s+/).length;
  const minutes = Math.floor(words / 228) + 1;
  return minutes;
};

export default getReadTime;
