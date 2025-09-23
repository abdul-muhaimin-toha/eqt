'use client';

import { formatDateShort } from '@/utils/utility';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export const InsightCard = ({ insight }) => {
   const { date, featuredImage, slug, title } = insight.node;

   return (
      <article className="blog-post">
         <div className="blog-thumbnail">
            <Link href={`/insight/${slug}`}>
               <Image
                  width={540}
                  height={340}
                  src={featuredImage?.node?.link || '/placeholder.jpg'}
                  className="blog-featured-image wp-post-image"
                  alt={title || 'Insight'}
               />
            </Link>
         </div>
         <div className="blog-meta">
            <span className="post-date">{formatDateShort(date)}</span>
         </div>
         <h3 className="lead-text-one">
            <Link href={`/insight/${slug}`}>{title}</Link>
         </h3>
      </article>
   );
};

function InsightShowcase({ title = 'ddd', insights }) {
   const [visibleCount, setVisibleCount] = useState(6);

   const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

   return (
      <section className="more-posts-section bg-white">
         <div className="container">
            <div className="more-posts-wrapper">
               <h2 className="section-title heading-h2">{title}</h2>
               <div className="more-posts-grid" id="more-posts-container">
                  {insights.slice(0, visibleCount).map((insight) => (
                     <InsightCard insight={insight} key={insight.node.id} />
                  ))}
               </div>
               {visibleCount < insights.length && (
                  <div className="load-more-wrapper">
                     <button
                        className="load-more-btn btn-transparent"
                        onClick={handleLoadMore}
                     >
                        <span>Load More</span>
                     </button>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
}

export default InsightShowcase;
