import InsightShowcase from '@/components/insight/insight-showcase';
import LatestInsight from '@/components/insight/latest-insight';
import Hero from '@/components/commons/hero-banner';

export default function InsightPage() {
   return (
      <>
         <Hero
            title="Latest Insights"
            bgImage="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-4-2-scaled.webp"
         />
         <LatestInsight />
         <InsightShowcase />
      </>
   );
}
