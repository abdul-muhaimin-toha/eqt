import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function HomePage() {
   const homePageData = await getPageData('home');

   return <RenderBlocksHelper blocks={homePageData} />;
}
