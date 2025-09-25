import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { formatSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata() {
   const seo = await formatSeoMeta('insight');

   console.log(seo);

   return seo;
}

export default async function InsightPage() {
   const insightPageData = await getPageData('insight');

   return <RenderBlocksHelper blocks={insightPageData} />;
}
