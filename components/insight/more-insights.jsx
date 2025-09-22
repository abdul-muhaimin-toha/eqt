'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { InsightCard } from './insight-showcase';
import Link from 'next/link';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';

function MoreInsights({ insights }) {
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

   if (!insights?.length) return null;

   return (
      <section className="nh-projects-slider !bg-white">
         {/* Header */}
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2">
                  More Relevant Insights
               </h2>
               <Link href="/insight" className="btn-transparent text-uppercase">
                  <span>View All</span>
               </Link>
            </div>
         </div>

         {/* Swiper */}
         <div className="container container--slider">
            <div className="project-swiper-container">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop
                  pagination={{ el: paginationRef.current, clickable: true }}
                  breakpoints={{
                     320: { slidesPerView: 1.2 },
                     768: { slidesPerView: 2 },
                     1024: { slidesPerView: 3 },
                  }}
                  onSwiper={setSwiperInstance}
               >
                  {insights.map((insight) => (
                     <SwiperSlide key={insight.node.id || insight.node.slug}>
                        <InsightCard insight={insight} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>

         {/* Custom Pagination & Navigation */}
         <div className="container">
            <div className="slider-bottom-area">
               <div className="swiper-pagination" ref={paginationRef}></div>
               <div className="swiper-nav-icon">
                  <div
                     className="swiper-button-prev"
                     ref={prevRef}
                     role="button"
                     aria-label="Previous Slide"
                  >
                     <PrevIcon />
                  </div>
                  <div
                     className="swiper-button-next"
                     ref={nextRef}
                     role="button"
                     aria-label="Next Slide"
                  >
                     <NextIcon />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default MoreInsights;
