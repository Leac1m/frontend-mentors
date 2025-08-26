export const importImg = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};