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

// Placeholder data
const placeholderProjects = [
   {
      id: 1,
      title: 'Keraniganj Green Towers',
      category: 'Apartment',
      location: 'Keraniganj, Dhaka',
      status: 'Ongoing',
      statusColor: '#007BFF',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/',
   },
   {
      id: 2,
      title: 'Downtown Residence',
      category: 'Residential',
      location: 'Gulshan, Dhaka',
      status: 'Completed',
      statusColor: '#28A745',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/',
   },
   {
      id: 3,
      title: 'Lake View Apartments',
      category: 'Apartment',
      location: 'Banani, Dhaka',
      status: 'Ongoing',
      statusColor: '#007BFF',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/',
   },
   {
      id: 4,
      title: 'City Center Towers',
      category: 'Commercial',
      location: 'Motijheel, Dhaka',
      status: 'Upcoming',
      statusColor: '#FFC107',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/',
   },
];

const ProjectCard = ({ project }) => {
   const { image, title, status, statusColor, category, location, link } =
      project;

   return (
      <article className="project-card-item">
         <div className="project-thumbnail">
            <Image
               src={image}
               alt={title}
               width={1040}
               height={650}
               className="project-image"
            />
            {status && (
               <div
                  className="project-status text-white"
                  style={{ backgroundColor: statusColor }}
               >
                  {status}
               </div>
            )}
         </div>

         <div className="project-content">
            {category && (
               <div className="project-category">
                  <span>{category}</span>
               </div>
            )}

            <h3 className="project-title heading-h4">{title}</h3>

            {location && (
               <div className="project-location">
                  <Location />
                  <span className="text-uppercase body-two-caps">
                     {location}
                  </span>
               </div>
            )}
         </div>

         <Link href={link} className="project-link" />
      </article>
   );
};

const PopularDeals = () => {
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
      <section className="nh-projects-slider">
         {/* Header */}
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2">
                  Popular Deals in Town
               </h2>
               <Link href="/" className="btn-transparent text-uppercase">
                  <span>View All</span>
               </Link>
            </div>
         </div>

         {/* Swiper */}
         <div className="container container--slider">
            <div className="project-swiper-container">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={20}
                  slidesPerView={4}
                  loop
                  pagination={{ el: paginationRef.current, clickable: true }}
                  breakpoints={{
                     320: { slidesPerView: 1.2 },
                     768: { slidesPerView: 2 },
                     1024: { slidesPerView: 3 },
                  }}
                  onSwiper={setSwiperInstance}
               >
                  {placeholderProjects.map((project) => (
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
