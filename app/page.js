import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { formatSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata() {
   const seo = await formatSeoMeta('home');

   console.log(seo);

   return seo;
}

export default async function HomePage() {
   const homePageData = await getPageData('home');
   return <RenderBlocksHelper blocks={homePageData} />;
}
