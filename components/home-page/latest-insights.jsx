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
import { formatDateShort, getLinkTarget } from '@/utils/utility';

const InsightCard = ({ insight }) => {
   const { date, featuredImage, slug, title } = insight;
   const imgSrc = featuredImage?.node?.link;

   return (
      <article className="blog-card">
         <div className="blog-thumbnail">
            <Image
               width={740}
               height={500}
               src={imgSrc}
               className="attachment-full size-full wp-post-image"
               alt={title}
            />
         </div>
         <div className="blog-content">
            {date && <p className="date-title">{formatDateShort(date)}</p>}
            {title && <h3 className="lead-text-one">{title}</h3>}
         </div>
         <Link href={`/insights/${slug}`} className="read-more" />
      </article>
   );
};

function LatestInsights({ data, insights }) {
   const { btn_text, btn_url, open_in_new_tab, top_title } = data?.data || {};

   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [swiperInstance, setSwiperInstance] = useState(null);

   // Attach navigation & pagination once swiper is ready
   useEffect(() => {
      if (
         !swiperInstance ||
         !prevRef.current ||
         !nextRef.current ||
         !paginationRef.current
      )
         return;

      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.params.pagination.el = paginationRef.current;

      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
      swiperInstance.pagination.init();
      swiperInstance.pagination.update();
   }, [swiperInstance]);

   return (
      <section className="latest-insights">
         {/* Header */}
         <div className="container">
            <div className="nh-project-top">
               {top_title && (
                  <h2
                     className="nh-project-title heading-h2"
                     data-aos="fade-up"
                  >
                     {top_title}
                  </h2>
               )}
               {btn_url && (
                  <Link
                     data-aos="fade-up"
                     target={getLinkTarget(open_in_new_tab) || '_self'}
                     href={btn_url}
                     className="btn-transparent text-uppercase"
                  >
                     <span>{btn_text || 'Learn More'}</span>
                  </Link>
               )}
            </div>
         </div>

         {/* Swiper */}
         <div
            className="container container--slider"
            data-aos="fade-up"
            data-aos-delay="100"
         >
            {/* Desktop Swiper */}
            <div className="blog-swiper-container blog-list-container blog-desktop">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={3}
                  centeredSlides
                  loop
                  navigation={{
                     prevEl: prevRef.current,
                     nextEl: nextRef.current,
                  }}
                  pagination={{ el: paginationRef.current, clickable: true }}
                  onSwiper={setSwiperInstance}
               >
                  {(insights || []).map((insight) => (
                     <SwiperSlide
                        key={insight?.id}
                        className="swiper-slide-custom"
                     >
                        <InsightCard insight={insight} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>

            {/* Mobile Swiper */}
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
                  pagination={{ el: paginationRef.current, clickable: true }}
                  breakpoints={{
                     320: { slidesPerView: 1.3 },
                     768: { slidesPerView: 2 },
                  }}
                  onSwiper={setSwiperInstance}
               >
                  {(insights || []).map((insight) => (
                     <SwiperSlide
                        key={insight?.id}
                        className="swiper-slide-custom"
                     >
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
