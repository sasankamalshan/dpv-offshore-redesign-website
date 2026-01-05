
export const getImagePath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' 
    ? '/dpv-offshore-redesign-website' 
    : '';
  return `${basePath}${path}`;
};