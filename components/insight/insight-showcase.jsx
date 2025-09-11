'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const insights = [
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created the first hanger worthy of Vogue',
      link: '/insight/1',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
   },
];

export const InsightCard = ({ insight }) => {
   return (
      <article className="blog-post">
         <div className="blog-thumbnail">
            <Link href={insight.link}>
               <Image
                  width={540}
                  height={340}
                  src={insight.image}
                  className="blog-featured-image wp-post-image"
                  alt=""
               />
            </Link>
         </div>
         <div className="blog-meta">
            <span className="post-date">{insight.date}</span>
         </div>
         <h3 className="lead-text-one">
            <Link href={insight.link}>{insight.title}</Link>
         </h3>
      </article>
   );
};

function InsightShowcase() {
   const [visibleCount, setVisibleCount] = useState(6); // show 6 initially

   const handleLoadMore = () => {
      setVisibleCount((prev) => prev + 6);
   };

   return (
      <section className="more-posts-section bg-white">
         <div className="container">
            <div className="more-posts-wrapper">
               <h2 className="section-title heading-h2">Insights</h2>
               <div className="more-posts-grid" id="more-posts-container">
                  {insights.slice(0, visibleCount).map((insight, idx) => (
                     <InsightCard insight={insight} key={idx} />
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
