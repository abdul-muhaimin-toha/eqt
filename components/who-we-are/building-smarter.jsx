'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { NextIcon, PrevIcon } from '../icons/prev-next-icon';
import Location from '../icons/location';
import Link from 'next/link';
import Image from 'next/image';

const portfolios = [
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'project-management',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'factory',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'hospital-consultancy',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'constructions',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'interior',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'land-project',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'project-management',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'factory',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'hospital-consultancy',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'constructions',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'interior',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'land-project',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'project-management',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'factory',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'hospital-consultancy',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'constructions',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'interior',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'land-project',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'project-management',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'factory',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'hospital-consultancy',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'constructions',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'interior',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'land-project',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'project-management',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'factory',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'hospital-consultancy',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'constructions',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'interior',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'land-project',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'project-management',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'factory',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'hospital-consultancy',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'constructions',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'interior',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'land-project',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'project-management',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'factory',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'hospital-consultancy',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'constructions',
   },
   {
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-4.webp',
      title: 'Gulshan Heights Apartment Interior',
      location: 'Mohakhali, Dhaka',
      description:
         'A luxurious apartment project designed with modern interiors and smart living solutions for urban families.',
      link: '/',
      category: 'interior',
   },
];

const PortFolioCard = ({ portfolio }) => {
   const { image, title, location, description, link } = portfolio;

   return (
      <div className="protfolios-card">
         <div className="feature-image">
            <Image src={image} alt={title} width={830} height={640} />
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
               <p className="inter-body-one color-two">{description}</p>
               <Link
                  className="btn-transparent btn-text text-uppercase"
                  href={link}
               >
                  <span>View Details</span>
               </Link>
            </div>
         </div>
      </div>
   );
};

function BuildingSmarter() {
   const prevRef = useRef(null);
   const nextRef = useRef(null);
   const paginationRef = useRef(null);
   const [swiperInstance, setSwiperInstance] = useState(null);

   const projectTypes = Array.from(new Set(portfolios.map((p) => p.category)));
   const [activeTab, setActiveTab] = useState(projectTypes[0]);

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

   const filteredPortfolios = portfolios.filter(
      (p) => p.category === activeTab
   );

   return (
      <section className="testimonial-section portfolios bg-white">
         {/* Header */}
         <div className="container">
            <div className="testimonial-container">
               <h2 className="text-center heading-h2">
                  A Legacy of Building Smarter
               </h2>
               <div className="testimonial-tab-header">
                  {projectTypes.map((category, idx) => (
                     <button
                        key={idx}
                        className={`testimonial-tab-btn ${
                           activeTab === category ? 'active' : ''
                        }`}
                        data-tab={`all-${idx}`}
                        onClick={() => setActiveTab(category)}
                     >
                        {category.replace(/-/g, ' ')}
                     </button>
                  ))}
               </div>
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
                     768: { slidesPerView: 1.4 },
                     835: { slidesPerView: 1 },
                  }}
                  onSwiper={setSwiperInstance}
               >
                  {filteredPortfolios.map((portfolio, idx) => (
                     <SwiperSlide key={idx}>
                        <PortFolioCard portfolio={portfolio} />
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
      </section>
   );
}

export default BuildingSmarter;
