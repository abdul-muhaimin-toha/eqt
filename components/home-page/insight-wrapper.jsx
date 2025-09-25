import { getInsightsData } from '@/graphql/components/get-insights-data';
import LatestInsights from './latest-insights';

async function InsightWrapper({ data }) {
   const insightsId = data.data.selected_posts.map((insight) => insight.id);
   const insights = await getInsightsData(insightsId);

   return <LatestInsights data={data} insights={insights} />;
}

export default InsightWrapper;
