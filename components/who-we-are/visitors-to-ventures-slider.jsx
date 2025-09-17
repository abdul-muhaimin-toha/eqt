'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import Quote from '../icons/quote';

const VisitorsToVenturesCard = ({ testimonial }) => (
   <article className="project-card-item">
      <Quote />
      <p className="lead-text-one quote">{testimonial.quote}</p>
      <div className="project-testimonial-head">
         <p className="lead-text-one">{testimonial.client_name}</p>
         <p className="designation">{testimonial.client_designation}</p>
      </div>
   </article>
);

function VisitorsToVenturesSlider({ testimonial }) {
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
      <>
         {/* Swiper */}
         <div className="container container--slider">
            <div className="testimonial-swiper-container">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop
                  pagination={{ el: paginationRef.current, clickable: true }}
                  breakpoints={{
                     320: { slidesPerView: 1.2 },
                     768: { slidesPerView: 2, spaceBetween: 40 },
                  }}
                  onSwiper={setSwiperInstance}
               >
                  {testimonial?.map((item) => (
                     <SwiperSlide key={item._id}>
                        <VisitorsToVenturesCard testimonial={item} />
                     </SwiperSlide>
                  )) || null}
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
      </>
   );
}

export default VisitorsToVenturesSlider;
