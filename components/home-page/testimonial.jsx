'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import Image from 'next/image';
import Play from '../icons/play';

const testimonialData = [
   {
      type: 'real-estate',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink: 'https://www.youtube.com/watch?v=u_qFlTu7HTw',
   },
   {
      type: 'consultation',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink: 'https://www.youtube.com/embed/u_qFlTu7HTw',
   },
   {
      type: 'real-estate',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink: 'https://www.youtube.com/embed/u_qFlTu7HTw',
   },
   {
      type: 'consultation',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink: 'https://www.youtube.com/embed/u_qFlTu7HTw',
   },
   {
      type: 'real-estate',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink:
         'https://www.youtube.com/watch?v=u_qFlTu7HTw&ab_channel=Renderforest',
   },
   {
      type: 'consultation',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink: 'https://www.youtube.com/embed/u_qFlTu7HTw',
   },
   {
      type: 'real-estate',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink: 'https://www.youtube.com/embed/u_qFlTu7HTw',
   },
   {
      type: 'consultation',
      text: 'Working with EQT was a game changer. Their insights and strategies helped us increase rental income by 30% within six months. Their team is professional, responsive, and genuinely invested in our success.',
      author: 'Sarah M.',
      role: 'Property Investor',
      imageSrc:
         'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-3.png',
      videoLink: 'https://www.youtube.com/embed/u_qFlTu7HTw',
   },
];

const TestimonialCard = ({ testimonial }) => {
   const { text, author, role, imageSrc, videoLink } = testimonial;

   return (
      <>
         <div className="testimonial-card">
            <div className="testimonial-content">
               <div className="testimonial-text">{text}</div>
               <div className="testimonial-author">
                  <h4>{author}</h4>
                  <p>{role}</p>
               </div>
            </div>

            <div className="testimonial-image">
               <Image src={imageSrc} alt={author} width={440} height={440} />
               {videoLink && (
                  <a role="button" className="play-button popup-youtube">
                     <Play />
                  </a>
               )}
            </div>
         </div>
      </>
   );
};

function Testimonial() {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [swiperInstance, setSwiperInstance] = useState(null);
   const [activeTab, setActiveTab] = useState('real-estate');

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

   const filteredTestimonials = testimonialData.filter(
      (item) => item.type === activeTab
   );

   return (
      <section className="testimonial-section">
         {/* Header Part */}
         <div className="container">
            <h2 className="text-white text-center heading-h2">
               Hear From Our Clients
            </h2>
            <div className="testimonial-container">
               <div className="testimonial-tab-header">
                  <button
                     onClick={() => setActiveTab('real-estate')}
                     className={`testimonial-tab-btn  ${
                        activeTab === 'real-estate' && 'active'
                     }`}
                  >
                     Real Estate
                  </button>
                  <button
                     onClick={() => setActiveTab('consultation')}
                     className={`testimonial-tab-btn  ${
                        activeTab === 'consultation' && 'active'
                     }`}
                  >
                     Consultation
                  </button>
               </div>
            </div>
         </div>
         {/* Swiper Part */}
         <div className="container container--slider">
            <div className="testimonial-tab-content">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1.3}
                  loop
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
                  onSwiper={setSwiperInstance}
               >
                  {filteredTestimonials.map((testimonial, idx) => (
                     <SwiperSlide key={idx}>
                        <TestimonialCard testimonial={testimonial} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>

         {/* Custom Pagination & Navigation */}
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
