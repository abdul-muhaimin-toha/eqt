import PostDetails from '@/components/commons/post-details';
import InsightDetailsHeader from '@/components/insight/insight-details-header';
import MoreInsights from '@/components/insight/more-insights';
import {
  getInsightBySlug,
  getRelatedInsights,
} from '@/graphql/components/get-insights-data';
import { formatInsightSeoMeta } from '@/utils/seo/format-seo-meta';
import { formatDateShort } from '@/utils/utility';

export async function generateMetadata({ params }) {
  const seo = await formatInsightSeoMeta(params.slug);
  return seo;
}

export default async function InsightDetailsPage({ params }) {
  const { slug } = params;
  const { id, date, title, featuredImage, content, categories } =
    await getInsightBySlug(slug);

  const postCategories = categories.edges.map((edge) => edge.node.categoryId);

  const insights = await getRelatedInsights(postCategories[0], 5, id);

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
