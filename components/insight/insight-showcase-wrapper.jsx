import { getAllInsights } from '@/graphql/components/get-insights-data';
import InsightShowcase from './insight-showcase';
import LatestInsight from './latest-insight';

async function InsightShowcaseWrapper({ data }) {
   // Fetch insights safely, default to empty array
   const insights = (await getAllInsights(500)) || [];

   // Filter out invalid nodes or missing dates
   const validInsights = insights.filter(
      (item) => item?.node?.date && !isNaN(new Date(item.node.date))
   );

   // Make a shallow copy and sort by date descending (most recent first)
   const sortedInsights = [...validInsights].sort((a, b) => {
      const dateA = new Date(a.node.date).getTime();
      const dateB = new Date(b.node.date).getTime();
      return dateB - dateA;
   });

   // Get the 4 most recent insights
   const latestInsights = sortedInsights.slice(0, 4);

   return (
      <>
         <LatestInsight insights={latestInsights} />
         <InsightShowcase title={data?.data?.title} insights={sortedInsights} />
      </>
   );
}

export default InsightShowcaseWrapper;
