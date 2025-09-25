export const getMetaContent = (meta = [], property, fallback = '') => {
   if (!Array.isArray(meta)) return fallback;
   const tag = meta.find(
      (item) => item.property === property || item.name === property
   );
   return tag?.content || fallback;
};
