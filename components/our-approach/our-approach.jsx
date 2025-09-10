'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';

const approachData = [
   {
      type: 'Land',
      items: [
         {
            number: '01',
            title: 'Land Scouting & Feasibility',
            description:
               'Identify suitable plots, assess legal and environmental feasibility, zoning regulations, and accessibility.',
         },
         {
            number: '02',
            title: 'Due Diligence',
            description:
               'Verify land ownership, survey boundaries, check titles, documents, and potential disputes.',
         },
         {
            number: '',
            title: '',
            description: '',
         },
         {
            number: '',
            title: '',
            description: '',
         },
         {
            number: '03',
            title: 'Negotiation & Acquisition',
            description:
               'Facilitate price negotiations, documentation, and coordinate with relevant authorities for smooth acquisition.',
         },
         {
            number: '04',
            title: 'Handover & Legal Support',
            description:
               'Complete ownership transfer, mutation, registration, and provide post-acquisition support.',
         },
      ],
   },
   {
      type: 'Constructions',
      items: [
         {
            number: '',
            title: '',
            description: '',
         },
         {
            number: '01',
            title: 'Land Scouting & Feasibility',
            description:
               'Identify suitable plots, assess legal and environmental feasibility, zoning regulations, and accessibility.',
         },
         {
            number: '02',
            title: 'Due Diligence',
            description:
               'Verify land ownership, survey boundaries, check titles, documents, and potential disputes.',
         },
         {
            number: '03',
            title: 'Negotiation & Acquisition',
            description:
               'Facilitate price negotiations, documentation, and coordinate with relevant authorities for smooth acquisition.',
         },
         {
            number: '04',
            title: 'Handover & Legal Support',
            description:
               'Complete ownership transfer, mutation, registration, and provide post-acquisition support.',
         },
         {
            number: '',
            title: '',
            description: '',
         },
      ],
   },
   {
      type: 'Consultancy',
      items: [
         {
            number: '01',
            title: 'Land Scouting & Feasibility',
            description:
               'Identify suitable plots, assess legal and environmental feasibility, zoning regulations, and accessibility.',
         },
         {
            number: '02',
            title: 'Due Diligence',
            description:
               'Verify land ownership, survey boundaries, check titles, documents, and potential disputes.',
         },
         {
            number: '03',
            title: 'Negotiation & Acquisition',
            description:
               'Facilitate price negotiations, documentation, and coordinate with relevant authorities for smooth acquisition.',
         },
         {
            number: '04',
            title: 'Handover & Legal Support',
            description:
               'Complete ownership transfer, mutation, registration, and provide post-acquisition support.',
         },
         {
            number: '05',
            title: 'Land Scouting & Feasibility',
            description:
               'Identify suitable plots, assess legal and environmental feasibility, zoning regulations, and accessibility.',
         },
         {
            number: '06',
            title: 'Due Diligence',
            description:
               'Verify land ownership, survey boundaries, check titles, documents, and potential disputes.',
         },
      ],
   },
];

const ApproachCard = ({ approach }) => {
   const hasContent = approach.number && approach.title && approach.description;

   return (
      <div className={`approach-item ${hasContent ? 'bg-title' : ''}`}>
         {hasContent && (
            <div className="approach-top-title">
               <h3 className="heading-h3">{approach.number}</h3>
            </div>
         )}
         <div className="approach-content">
            {approach.title && (
               <div className="approach-title lead-text-one font-primary">
                  {approach.title}
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

function OurApproach() {
   const [activeTab, setActiveTab] = useState(0);

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
      <section className="testimonial-section portfolios bg-white approachs">
         <div className="container">
            <h2 className="text-center heading-h2">Our Approach</h2>
            <div className="text-center short-description inter-body-one">
               At EQT, our approach is rooted in precision, innovation, and
               accountability. We focus on understanding your needs and
               translating them into robust, cost-effective engineering
               solutions. Every project we undertake reflects our commitment to
               quality, safety, and sustainability.
            </div>

            <div className="testimonial-container">
               {/* Tabs */}
               <div className="testimonial-tab-header">
                  {approachData.map((tab, idx) => (
                     <button
                        key={idx}
                        className={`testimonial-tab-btn ${
                           activeTab === idx ? 'active' : ''
                        }`}
                        onClick={() => setActiveTab(idx)}
                     >
                        {tab.type}
                     </button>
                  ))}
               </div>

               {/* Tab Content */}
               <div className="testimonial-tab-content">
                  <div className="approachs-items">
                     <div className="approachs-wrapper for-desktop">
                        {approachData[activeTab].items.map((approach, idx) => (
                           <ApproachCard key={idx} approach={approach} />
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
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
                     {approachData[activeTab].items
                        .filter(
                           (approach) =>
                              approach.number &&
                              approach.title &&
                              approach.description
                        )
                        .map((approach, idx) => (
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
