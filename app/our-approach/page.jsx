import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { formatSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata() {
   const seo = await formatSeoMeta('our-approach');

   console.log(seo);

   return seo;
}

export default async function OurApproachPage() {
   const whoWeArePageData = await getPageData('our-approach');

   return <RenderBlocksHelper blocks={whoWeArePageData} />;
}
