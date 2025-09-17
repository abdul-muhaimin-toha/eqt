export const splitBreakLine = (text) => {
   if (!text) return [];
   return text.split('[break-line]');
};

export const getLinkTarget = (openInNewTab) => {
   return openInNewTab ? '_blank' : '_self';
};
