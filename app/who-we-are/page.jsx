import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function WhoWeArePage() {
   const whoWeArePageData = await getPageData('who-we-are');

   return <RenderBlocksHelper blocks={whoWeArePageData} />;
}
