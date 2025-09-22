import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function CareerPage() {
   const careerPageData = await getPageData('careers');

   return <RenderBlocksHelper blocks={careerPageData} />;
}
