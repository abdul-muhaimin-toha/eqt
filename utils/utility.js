export const splitBreakLine = (text) => {
   if (!text) return [];
   return text.split('[break-line]');
};

export const getLinkTarget = (openInNewTab) => {
   return openInNewTab ? '_blank' : '_self';
};

export function formatDateShort(dateString) {
   if (!dateString) return '';

   const date = new Date(dateString);

   return new Intl.DateTimeFormat('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
   }).format(date);
}

export function makeMenuTree(items) {
   const map = new Map();

   items.forEach((item, index) => {
      map.set(item.parentId || index, { ...item, children: [] });
   });

   const tree = [];

   items.forEach((item, index) => {
      if (item.parentId) {
         const parentNode = map.get(item.parentId);
         if (parentNode) {
            parentNode.children.push(map.get(item.parentId || index));
         }
      } else {
         tree.push(map.get(item.parentId || index));
      }
   });

   return tree;
}

export function transformFooterMenu(menu) {
   if (!menu) return null;

   return {
      key: menu.name.toLowerCase().replace(/\s+/g, '-'),
      title: menu.name,
      links: (menu.menuItems?.edges || []).map(({ node }) => ({
         label: node.label,
         href: node.url,
      })),
   };
}

export const capitalizeFirstLetter = (str) =>
   str ? str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ') : '';

export const transformCategories = (flatCategories) => {
   const map = {};
   const result = [];

   flatCategories.forEach((cat) => {
      map[cat.id] = { id: cat.id, name: cat.name, children: [] };
   });

   flatCategories.forEach((cat) => {
      if (cat.parentId) {
         if (map[cat.parentId]) {
            map[cat.parentId].children.push({ id: cat.id, name: cat.name });
         }
      } else {
         result.push(map[cat.id]);
      }
   });

   return result;
};
