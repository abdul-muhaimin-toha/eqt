import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { formatSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata() {
  const seo = await formatSeoMeta('contact-us');
  return seo;
}

export default async function ContactUsPage() {
  const contactUsPageData = await getPageData('contact-us');

  return <RenderBlocksHelper blocks={contactUsPageData} />;
}
