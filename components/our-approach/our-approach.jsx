'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import parse from 'html-react-parser';

const ApproachCard = ({ approach }) => {
   const hasContent =
      approach.top_title && approach.title && approach.description;

   return (
      <div className={`approach-item ${hasContent ? 'bg-title' : ''}`}>
         {hasContent && (
            <div className="approach-top-title">
               <h3 className="heading-h3">{approach.top_title}</h3>
            </div>
         )}
         <div className="approach-content">
            {approach.title && (
               <div className="approach-title lead-text-one font-primary">
                  {approach.title
                     ? parse(approach.title, {
                          replace: (domNode) => {
                             if (domNode.name === 'script') return null;
                          },
                       })
                     : null}
               </div>
            )}
            {approach.description && (
               <p className="inter-body-one color-two">
                  {approach.description}
               </p>
            )}
         </div>
      </div>
   );
};

function OurApproach({ data }) {
   const { approachs, short_des, title } = data.data;
   const [activeTab, setActiveTab] = useState(0);

   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [swiperInstance, setSwiperInstance] = useState(null);

   useEffect(() => {
      if (!swiperInstance) return;
      if (prevRef.current && nextRef.current && paginationRef.current) {
         swiperInstance.params.navigation.prevEl = prevRef.current;
         swiperInstance.params.navigation.nextEl = nextRef.current;
         swiperInstance.params.pagination.el = paginationRef.current;

         swiperInstance.navigation.init();
         swiperInstance.navigation.update();
         swiperInstance.pagination.init();
         swiperInstance.pagination.update();
      }
   }, [swiperInstance]);

   console.log(approachs);

   const currentItems =
      approachs?.[activeTab]?.approachs_items?.filter(Boolean) || [];

   return (
      <section className="testimonial-section portfolios bg-white approachs">
         <div className="container">
            <h2 className="text-center heading-h2">{title}</h2>
            <div className="text-center short-description inter-body-one">
               {short_des}
            </div>

            <div className="testimonial-container">
               {/* Tabs */}
               <div className="testimonial-tab-header">
                  {approachs.map((tab, idx) => (
                     <button
                        key={tab._id}
                        className={`testimonial-tab-btn ${
                           activeTab === idx ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab(idx)}
                     >
                        {tab.title}
                     </button>
                  ))}
               </div>

               {/* Tab Content (Desktop) */}
               <div className="testimonial-tab-content">
                  <div className="approachs-items">
                     <div className="approachs-wrapper for-desktop">
                        {currentItems.map((approach, idx) => (
                           <ApproachCard key={idx} approach={approach} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Mobile Swiper */}
         <div className="for-mobile approach-mobile-slider">
            <div className="container container--slider">
               <div className="portfolios-slider">
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
                     {currentItems.map((approach, idx) => (
                        <SwiperSlide key={idx}>
                           <ApproachCard approach={approach} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>
            </div>

            {/* Custom Pagination & Navigation */}
            <div className="container">
               <div className="slider-bottom-area-testimonial">
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
         </div>
      </section>
   );
}

export default OurApproach;
