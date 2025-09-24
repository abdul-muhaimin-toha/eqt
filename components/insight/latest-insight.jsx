'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import parse from 'html-react-parser';
import { formatDateShort } from '@/utils/utility';

const LatestInsightCard = ({ insight }) => {
   const { node } = insight;
   return (
      <article className="blog-card-item">
         <div className="blog-card-item-inner">
            <div className="blog-thumbnail">
               <Link href={`/insight/${node.slug}`}>
                  <Image
                     width={660}
                     height={470}
                     src={node.featuredImage?.node?.link}
                     className="blog-featured-image wp-post-image w-full h-auto"
                     alt={node.title}
                  />
               </Link>
            </div>
            <div className="blog-content">
               <div className="blog-meta">
                  <span className="post-date">
                     {formatDateShort(node.date)}
                  </span>
               </div>
               <h3 className="blog-title">
                  <Link className="heading-h4" href={`/insight/${node.slug}`}>
                     {node.title}
                  </Link>
               </h3>
               <div className="blog-excerpt inter-body-one">
                  {node.excerpt
                     ? parse(node.excerpt, {
                          replace: (domNode) =>
                             domNode.name === 'script' ? null : undefined,
                       })
                     : null}
               </div>
               <Link className="btn-transparent" href={`/insight/${node.slug}`}>
                  <span>Read More</span>
               </Link>
            </div>
         </div>
      </article>
   );
};

function LatestInsight({ insights }) {
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

   if (!insights || insights.length === 0) {
      return null;
   }

   return (
      <section
         className="blog-top-section bg-white"
         data-aos="fade-down"
         data-aos-delay="100"
      >
         <div className="blog-top-list-section">
            <div className="container">
               <div className="blog-swiper-container">
                  {/* Main Swiper Container */}
                  <Swiper
                     modules={[Navigation, Pagination]}
                     slidesPerView={1}
                     loop={insights.length > 1}
                     pagination={{ el: paginationRef.current, clickable: true }}
                     onSwiper={setSwiperInstance}
                  >
                     {insights.map((insight) => (
                        <SwiperSlide key={insight.node.id}>
                           <LatestInsightCard insight={insight} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
                  {/* Pagination Container */}
                  <div className="slider-bottom-area" id="blog-slider-bottom">
                     <div
                        className="swiper-pagination"
                        ref={paginationRef}
                     ></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default LatestInsight;
