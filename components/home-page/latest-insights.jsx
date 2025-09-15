'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import Image from 'next/image';

const InsightCard = () => {
   return (
      <article className="blog-card">
         <div className="blog-thumbnail">
            <Image
               width={740}
               height={500}
               src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-7.webp"
               className="attachment-full size-full wp-post-image"
               alt=""
            />
         </div>
         <div className="blog-content">
            <p className="date-title">5 August 2025</p>
            <h3 className="lead-text-one">
               How this founder created the first hanger worthy of Vogue
            </h3>
         </div>
         <Link href="/" className="read-more" />
      </article>
   );
};

function LatestInsights() {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [swiperInstance, setSwiperInstance] = useState(null);
   const [activeIndex, setActiveIndex] = useState(0);

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
      <section className="latest-insights">
         {/* Header */}
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2">Latest Insights</h2>
               <Link href="/insight" className="btn-transparent text-uppercase">
                  <span>View All</span>
               </Link>
            </div>
         </div>

         {/* Swiper */}
         <div className="container container--slider">
            <div className="blog-swiper-container blog-list-container blog-desktop">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={3}
                  centeredSlides={true}
                  loop={true}
                  navigation={{
                     prevEl: prevRef.current,
                     nextEl: nextRef.current,
                  }}
                  pagination={{ el: paginationRef.current, clickable: true }}
                  onSwiper={(swiper) => setSwiperInstance(swiper)}
               >
                  {['', '', '', '', '', ''].map((insight, index) => (
                     <SwiperSlide key={index} className="swiper-slide-custom">
                        <InsightCard insight={insight} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
            <div className="blog-swiper-mobile blog-mobile">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop
                  navigation={{
                     prevEl: prevRef.current,
                     nextEl: nextRef.current,
                  }}
                  breakpoints={{
                     320: { slidesPerView: 1.3 },
                     768: { slidesPerView: 2 },
                  }}
                  pagination={{ el: paginationRef.current, clickable: true }}
                  onSwiper={(swiper) => setSwiperInstance(swiper)}
               >
                  {['', '', '', '', '', ''].map((insight, index) => (
                     <SwiperSlide key={index} className="swiper-slide-custom">
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
                  >
                     <PrevIcon />
                  </div>
                  <div
                     className="swiper-button-next"
                     ref={nextRef}
                     role="button"
                  >
                     <NextIcon />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default LatestInsights;
