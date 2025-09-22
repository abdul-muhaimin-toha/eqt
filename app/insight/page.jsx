import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function InsightPage() {
   const insightPageData = await getPageData('insight');

   return <RenderBlocksHelper blocks={insightPageData} />;
}
