'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import Location from '../icons/location';
import Link from 'next/link';
import Image from 'next/image';

const PortFolioCard = ({ portfolio }) => {
   const { feature_image, title, location, quote, quote_url } = portfolio;

   return (
      <div className="protfolios-card">
         <div className="feature-image">
            <Image src={feature_image} alt={title} width={830} height={640} />
         </div>

         <div className="portfolio-card-content">
            <div className="portfolio-card-content-top">
               <h3 className="heading-h3">{title}</h3>
               <div className="location text-uppercase">
                  <Location />
                  <span>{location}</span>
               </div>
            </div>

            <div className="portfolio-card-content-bottom">
               <p className="inter-body-one color-two">{quote}</p>
               {quote_url && (
                  <Link
                     className="btn-transparent btn-text text-uppercase"
                     href={quote_url}
                  >
                     <span>View Details</span>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

function BuildingSmarter({ data }) {
   const portfolios = data?.data?.portfolios || [];
   const title = data?.data?.title || '';

   const projectTypes = useMemo(
      () => portfolios.map((p) => p.title),
      [portfolios]
   );

   const [activeTab, setActiveTab] = useState(projectTypes[0] || '');

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

   const filteredPortfolios =
      portfolios
         ?.find((p) => p.title === activeTab)
         ?.portfolio_items?.map((item) => ({
            feature_image: item.feature_image,
            title: item.title,
            location: item.location,
            quote: item.quote,
            quote_url: item.quote_url,
         })) || [];

   return (
      <section className="testimonial-section portfolios bg-white">
         <div className="container">
            <div className="testimonial-container">
               <h2 className="text-center heading-h2" data-aos="fade-up">
                  {title}
               </h2>
               <div
                  className="testimonial-tab-header"
                  data-aos="fade-up"
                  data-aos-delay="100"
               >
                  {projectTypes.map((type, idx) => (
                     <button
                        key={`${type}-${idx}`}
                        className={`testimonial-tab-btn ${
                           activeTab === type ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab(type)}
                     >
                        {type}
                     </button>
                  ))}
               </div>
            </div>
         </div>

         <div
            className="container container--slider"
            data-aos="fade-up"
            data-aos-delay="100"
         >
            <div className="testimonial-swiper-container">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  loop
                  pagination={{ el: paginationRef.current, clickable: true }}
                  breakpoints={{
                     320: { slidesPerView: 1.2 },
                     768: { slidesPerView: 1.4 },
                     835: { slidesPerView: 1 },
                  }}
                  onSwiper={setSwiperInstance}
               >
                  {filteredPortfolios.map((portfolio, idx) => (
                     <SwiperSlide key={`${portfolio.title}-${idx}`}>
                        <PortFolioCard portfolio={portfolio} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>

         <div className="container" data-aos="fade-up">
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
      </section>
   );
}

export default BuildingSmarter;
