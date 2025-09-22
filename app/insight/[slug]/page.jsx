import PostDetails from '@/components/commons/post-details';
import InsightDetailsHeader from '@/components/insight/insight-details-header';
import MoreInsights from '@/components/insight/more-insights';
import {
   getAllInsights,
   getInsightBySlug,
} from '@/graphql/components/get-insights-data';
import { formatDateShort } from '@/utils/utility';

export default async function InsightDetailsPage({ params }) {
   const { slug } = params;
   const { date, title, featuredImage, content } = await getInsightBySlug(slug);

   // Fetch insights safely, default to empty array
   const insights = (await getAllInsights(5)) || [];

   // Filter out invalid nodes or missing dates
   const validInsights = insights.filter(
      (item) => item?.node?.date && !isNaN(new Date(item.node.date))
   );

   return (
      <>
         <section className="insights-description-wrapper bg-white">
            <div className="container">
               <InsightDetailsHeader
                  headingDetails={{
                     date: formatDateShort(date),
                     title,
                     image: featuredImage?.node?.link ?? '',
                  }}
               />
               <PostDetails dummyRichtext={content} />
            </div>
         </section>

         <MoreInsights insights={validInsights} />
      </>
   );
}
