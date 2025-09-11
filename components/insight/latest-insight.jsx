'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';

const insights = [
   {
      date: '5 August 2025',
      title: 'How this founder created ‘the first hanger worthy of Vogue’',
      excerpt:
         'EQT was established with a mission to make good people wealthy. We believe that only by doing so do we make tangible change where truth and goodness prevail.',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
      link: '/insight/1',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created ‘the first hanger worthy of Vogue’',
      excerpt:
         'EQT was established with a mission to make good people wealthy. We believe that only by doing so do we make tangible change where truth and goodness prevail.',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
      link: '/insight/1',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created ‘the first hanger worthy of Vogue’',
      excerpt:
         'EQT was established with a mission to make good people wealthy. We believe that only by doing so do we make tangible change where truth and goodness prevail.',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
      link: '/insight/1',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created ‘the first hanger worthy of Vogue’',
      excerpt:
         'EQT was established with a mission to make good people wealthy. We believe that only by doing so do we make tangible change where truth and goodness prevail.',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
      link: '/insight/1',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created ‘the first hanger worthy of Vogue’',
      excerpt:
         'EQT was established with a mission to make good people wealthy. We believe that only by doing so do we make tangible change where truth and goodness prevail.',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
      link: '/insight/1',
   },
   {
      date: '5 August 2025',
      title: 'How this founder created ‘the first hanger worthy of Vogue’',
      excerpt:
         'EQT was established with a mission to make good people wealthy. We believe that only by doing so do we make tangible change where truth and goodness prevail.',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp',
      link: '/insight/1',
   },
];

const LatestInsightCard = ({ insight }) => {
   return (
      <article className="blog-card-item">
         <div className="blog-card-item-inner">
            <div className="blog-thumbnail">
               <Link href={insight.link}>
                  <Image
                     width={660}
                     height={470}
                     src={insight.image}
                     className="blog-featured-image wp-post-image"
                     alt=""
                  />
               </Link>
            </div>
            <div className="blog-content">
               <div className="blog-meta">
                  <span className="post-date">{insight.date}</span>
               </div>
               <h3 className="blog-title">
                  <Link className="heading-h4" href={insight.link}>
                     {insight.title}
                  </Link>
               </h3>
               <div className="blog-excerpt inter-body-one">
                  <p>{insight.excerpt}</p>
               </div>
               <Link className="btn-transparent" href={insight.link}>
                  <span>Read More</span>
               </Link>
            </div>
         </div>
      </article>
   );
};

function LatestInsight() {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [swiperInstance, setSwiperInstance] = useState(null);

   useEffect(() => {
      if (!swiperInstance) return;

      const swiper = swiperInstance;
      if (prevRef.current && nextRef.current && paginationRef.current) {
         swiper.params.navigation.prevEl = prevRef.current;
         swiper.params.navigation.nextEl = nextRef.current;
         swiper.params.pagination.el = paginationRef.current;

         swiper.navigation.init();
         swiper.navigation.update();
         swiper.pagination.init();
         swiper.pagination.update();
      }
   }, [swiperInstance]);

   return (
      <section className="blog-top-section bg-white">
         <div className="blog-top-list-section">
            <div className="container">
               <div className="blog-swiper-container">
                  {/* Main Swiper Container */}
                  <Swiper
                     modules={[Navigation, Pagination]}
                     slidesPerView={1}
                     loop
                     pagination={{ el: paginationRef.current, clickable: true }}
                     onSwiper={setSwiperInstance}
                  >
                     {insights.map((insight, idx) => (
                        <SwiperSlide key={idx}>
                           <LatestInsightCard insight={insight} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  {/* Pagination Container */}
                  <div className="slider-bottom-area" id="blog-slider-bottom">
                     <div
                        className="swiper-pagination"
                        ref={paginationRef}
                     ></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default LatestInsight;
