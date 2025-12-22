import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { formatSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata() {
  const seo = await formatSeoMeta('who-we-are');
  return seo;
}

export default async function WhoWeArePage() {
  const whoWeArePageData = await getPageData('who-we-are');

  return <RenderBlocksHelper blocks={whoWeArePageData} />;
}
