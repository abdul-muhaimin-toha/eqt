import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function OurApproachPage() {
   const whoWeArePageData = await getPageData('our-approach');

   return <RenderBlocksHelper blocks={whoWeArePageData} />;
}
