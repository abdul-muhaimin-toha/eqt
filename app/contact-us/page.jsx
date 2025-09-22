import { getPageData } from '@/graphql/components/get-page-data';
import RenderBlocksHelper from '@/utils/render-blocks-helper';

export default async function ContactUsPage() {
   const contactUsPageData = await getPageData('contact-us');

   return <RenderBlocksHelper blocks={contactUsPageData} />;
}
