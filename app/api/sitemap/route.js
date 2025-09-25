import { getSitemapData } from '@/graphql/components/get-sitemap-data';

export const GET = async () => {
   const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_API;
   const data = await getSitemapData();

   const urls = [];

   // Pages
   data.pages.forEach(({ node }) =>
      urls.push({ loc: `${baseUrl}${node.uri}`, lastmod: node.modified })
   );

   // Posts / Insights
   data.posts.forEach(({ node }) =>
      urls.push({
         loc: `${baseUrl}/insight/${node.slug}`,
         lastmod: node.modified,
      })
   );

   // Projects
   data.projects.forEach(({ node }) =>
      urls.push({
         loc: `${baseUrl}/projects/${node.slug}`,
         lastmod: node.modified,
      })
   );

   // Careers
   data.careers.forEach(({ node }) =>
      urls.push({
         loc: `${baseUrl}/career/${node.slug}`,
         lastmod: node.modified,
      })
   );

   // Build XML
   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
   .map(
      (url) => `<url>
  <loc>${url.loc}</loc>
  <lastmod>${new Date(url.lastmod).toISOString()}</lastmod>
</url>`
   )
   .join('')}
</urlset>`;

   return new Response(sitemap, {
      headers: { 'Content-Type': 'application/xml' },
   });
};
