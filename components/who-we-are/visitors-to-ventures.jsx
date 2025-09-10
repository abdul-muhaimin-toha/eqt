'use client';

import { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import Quote from '../icons/quote';

const testimonials = [
   {
      quote: 'At Eons Quantum Tech, we believe in pushing boundaries and embracing cutting-edge solutions to empower our clients. Lead with creativity, and let technology transform your vision into reality.',
      name: 'Willie Harvey PhD',
      designation: 'Managing Director at EQT',
   },
   {
      quote: 'At Eons Quantum Tech, we believe in pushing boundaries and embracing cutting-edge solutions to empower our clients. Lead with creativity, and let technology transform your vision into reality.',
      name: 'Sophia Martinez',
      designation: 'Chief Technology Officer at InnovateX',
   },
   {
      quote: 'At Eons Quantum Tech, we believe in pushing boundaries and embracing cutting-edge solutions to empower our clients. Lead with creativity, and let technology transform your vision into reality.',
      name: 'James Anderson',
      designation: 'Founder & CEO at TechVision',
   },
   {
      quote: 'At Eons Quantum Tech, we believe in pushing boundaries and embracing cutting-edge solutions to empower our clients. Lead with creativity, and let technology transform your vision into reality.',
      name: 'Aisha Khan',
      designation: 'Head of Operations at FutureWorks',
   },
];

const VisitorsToVenturesCard = ({ testimonial }) => {
   return (
      <article className="project-card-item">
         <Quote />

         <p className="lead-text-one quote">“{testimonial.quote}”</p>

         <div className="project-testimonial-head">
            <p className="lead-text-one">{testimonial.name}</p>
            <p className="designation">{testimonial.designation}</p>
         </div>
      </article>
   );
};

function VisitorsToVentures() {
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
      <section className="nh-projects-slider bg-white who-we-are-about">
         {/* Header */}
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2">
                  From Vision to Venture
               </h2>
            </div>
         </div>

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
                  {testimonials.map((testimonial, idx) => (
                     <SwiperSlide key={idx}>
                        <VisitorsToVenturesCard testimonial={testimonial} />
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

export default VisitorsToVentures;
