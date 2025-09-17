'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import Play from '../icons/play';

const TestimonialCard = ({ testimonial }) => {
   const { content, client_name, designation, feature_image, youtube_url } =
      testimonial;

   return (
      <div className="testimonial-card">
         <div className="testimonial-content">
            <p className="testimonial-text">{content}</p>
            <div className="testimonial-author">
               <h4>{client_name}</h4>
               <p>{designation}</p>
            </div>
         </div>

         <div className="testimonial-image">
            {feature_image && (
               <Image
                  src={feature_image}
                  alt={client_name}
                  width={440}
                  height={440}
               />
            )}
            {youtube_url && (
               <Link
                  href={youtube_url}
                  target="_blank"
                  className="play-button popup-youtube"
               >
                  <Play />
               </Link>
            )}
         </div>
      </div>
   );
};

const TestimonialTabs = ({ tabs, activeTab, onChange }) => (
   <div className="testimonial-container">
      <div className="testimonial-tab-header">
         {tabs.map(({ key, label }) => (
            <button
               key={key}
               onClick={() => onChange(key)}
               className={`testimonial-tab-btn ${
                  activeTab === key ? 'active' : ''
               }`}
            >
               {label}
            </button>
         ))}
      </div>
   </div>
);

const TestimonialSlider = ({
   testimonials,
   paginationRef,
   prevRef,
   nextRef,
   onSwiperInit,
}) => (
   <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      loop={testimonials.length > 1}
      navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
      pagination={{ el: paginationRef.current, clickable: true }}
      breakpoints={{
         320: { slidesPerView: 1.15 },
         400: { slidesPerView: 1.2 },
         600: { slidesPerView: 1 },
         768: { slidesPerView: 1.2 },
         835: { slidesPerView: 1 },
         1000: { slidesPerView: 1.1 },
         1160: { slidesPerView: 1.2 },
         1300: { slidesPerView: 1.3 },
      }}
      onSwiper={onSwiperInit}
   >
      {testimonials.map((testimonial) => (
         <SwiperSlide key={testimonial._id}>
            <TestimonialCard testimonial={testimonial} />
         </SwiperSlide>
      ))}
   </Swiper>
);

function Testimonial({ data }) {
   const { testimonials = [], title = '' } = data?.data || {};

   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [swiperInstance, setSwiperInstance] = useState(null);

   // Build tabs and testimonial mapping
   const { tabs, testimonialsByType } = useMemo(() => {
      if (!testimonials.length) return { tabs: [], testimonialsByType: {} };

      const mapping = {};
      const tabList = testimonials.map((group) => {
         const key = group.title.toLowerCase().replace(/\s+/g, '-');
         mapping[key] = group.testimonial_items || [];
         return { key, label: group.title };
      });
      return { tabs: tabList, testimonialsByType: mapping };
   }, [testimonials]);

   const [activeTab, setActiveTab] = useState(tabs[0]?.key || '');

   // Ensure activeTab updates when tabs are loaded
   useEffect(() => {
      if (tabs.length && !activeTab) {
         setActiveTab(tabs[0].key);
      }
   }, [tabs, activeTab]);

   const filteredTestimonials = testimonialsByType[activeTab] || [];

   // Initialize Swiper navigation/pagination
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

   if (!tabs.length) return null;

   return (
      <section className="testimonial-section">
         <div className="container">
            <h2 className="text-white text-center heading-h2">{title}</h2>
            <TestimonialTabs
               tabs={tabs}
               activeTab={activeTab}
               onChange={setActiveTab}
            />
         </div>

         <div className="container container--slider">
            <div className="testimonial-tab-content">
               <TestimonialSlider
                  testimonials={filteredTestimonials}
                  paginationRef={paginationRef}
                  prevRef={prevRef}
                  nextRef={nextRef}
                  onSwiperInit={setSwiperInstance}
               />
            </div>
         </div>

         <div className="container">
            <div className="slider-bottom-area-testimonial pagination-white">
               <div className="swiper-pagination" ref={paginationRef}></div>
               <div className="swiper-nav-icon hover-white">
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

export default Testimonial;
