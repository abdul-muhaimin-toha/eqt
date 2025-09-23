'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Location from '../icons/location';
import Link from 'next/link';
import Image from 'next/image';
import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import { getLinkTarget } from '@/utils/utility';

export const ProjectCard = ({ project }) => {
   const {
      featuredImage,
      projectLocation = 'Unknown location',
      title = 'Untitled Project',
      slug = '',
      projectStatus = '',
      projectType = '',
      projectStatusColor = '',
   } = project || {};

   const featuredImageUrl = featuredImage?.node?.mediaItemUrl || '';

   return (
      <article className="project-card-item">
         <div className="project-thumbnail">
            <Image
               src={featuredImageUrl}
               alt={title}
               width={1040}
               height={650}
               className="project-image"
            />
            {projectStatus && (
               <div
                  className="project-status text-white"
                  style={{
                     background: projectStatusColor || '#000',
                     borderColor: projectStatusColor || '#000',
                  }}
               >
                  {projectStatus}
               </div>
            )}
         </div>

         <div className="project-content">
            {projectType && (
               <div className="project-category">
                  <span>{projectType}</span>
               </div>
            )}

            <h3 className="project-title heading-h4">{title}</h3>

            {projectLocation && (
               <div className="project-location">
                  <Location />
                  <span className="text-uppercase body-two-caps">
                     {projectLocation}
                  </span>
               </div>
            )}
         </div>

         <Link
            href={`/projects/${slug}`}
            className="project-link"
            aria-label={`View details of ${title}`}
         />
      </article>
   );
};

const PopularDeals = ({ data, projects = [], variant = '' }) => {
   const {
      btn_text = '',
      btn_url = '#',
      open_in_new_tab = false,
      title = '',
   } = data?.data || {};

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

   return (
      <section
         className={`nh-projects-slider ${
            variant === 'project-page' ? 'sm:!pb-0' : ''
         }`}
      >
         {/* Header */}
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2">{title}</h2>
               {btn_text && btn_url && (
                  <Link
                     target={getLinkTarget(open_in_new_tab)}
                     href={btn_url}
                     className="btn-transparent text-uppercase"
                  >
                     <span>{btn_text}</span>
                  </Link>
               )}
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
                  {projects.map((project) => (
                     <SwiperSlide key={project.id}>
                        <ProjectCard project={project} />
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
};

export default PopularDeals;
