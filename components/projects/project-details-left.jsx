'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import Link from 'next/link';
import Download from '../icons/download';
import Image from 'next/image';

const slides = [
   'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
   'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-2.webp',
   'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-1.webp',
   'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-8-scaled.webp',
   'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle-2.webp',
];

function ProjectDetailsLeft() {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const [mainSwiper, setMainSwiper] = useState(null);
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   useEffect(() => {
      if (mainSwiper) {
         mainSwiper.params.navigation.prevEl = prevRef.current;
         mainSwiper.params.navigation.nextEl = nextRef.current;
         mainSwiper.navigation.init();
         mainSwiper.navigation.update();
      }
   }, [mainSwiper]);

   return (
      <div className="single-product-left">
         <div className="single-product-left-sticky">
            <div className="single-gallery-thumbnail">
               {/* Main Slider */}
               <Swiper
                  modules={[Navigation, Pagination, Thumbs]}
                  spaceBetween={10}
                  slidesPerView={1}
                  thumbs={{ swiper: thumbsSwiper }}
                  onSwiper={setMainSwiper}
                  className="product-gallery-slider"
               >
                  {slides.map((src, idx) => (
                     <SwiperSlide key={idx}>
                        <Image
                           src={src}
                           width={895}
                           height={880}
                           className="attachment-full size-full"
                           alt=""
                        />
                     </SwiperSlide>
                  ))}

                  {/* Custom Navigation Buttons */}
                  <div ref={nextRef} className="swiper-button-next">
                     <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <rect width={56} height={56} rx={28} fill="white" />
                        <g clipPath="url(#clip0_460_119526)">
                           <path
                              d="M20.9289 27.9998H35.0711"
                              stroke="#173A1C"
                              strokeOpacity="0.8"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                           <path
                              d="M28 20.9287L35.0711 27.9998L28 35.0708"
                              stroke="#173A1C"
                              strokeOpacity="0.8"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </g>
                        <defs>
                           <clipPath id="clip0_460_119526">
                              <rect
                                 x={8}
                                 y={8}
                                 width={40}
                                 height={40}
                                 rx={20}
                                 fill="white"
                              />
                           </clipPath>
                        </defs>
                     </svg>
                  </div>
                  <div ref={prevRef} className="swiper-button-prev">
                     <svg
                        width={56}
                        height={56}
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <rect width={56} height={56} rx={28} fill="white" />
                        <g clipPath="url(#clip0_460_119526)">
                           <path
                              d="M20.9289 27.9998H35.0711"
                              stroke="#173A1C"
                              strokeOpacity="0.8"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                           <path
                              d="M28 20.9287L35.0711 27.9998L28 35.0708"
                              stroke="#173A1C"
                              strokeOpacity="0.8"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           />
                        </g>
                        <defs>
                           <clipPath id="clip0_460_119526">
                              <rect
                                 x={8}
                                 y={8}
                                 width={40}
                                 height={40}
                                 rx={20}
                                 fill="white"
                              />
                           </clipPath>
                        </defs>
                     </svg>
                  </div>
               </Swiper>

               {/* Thumbnail Slider */}
               <Swiper
                  onSwiper={setThumbsSwiper}
                  modules={[Thumbs]}
                  spaceBetween={10}
                  slidesPerView="2.5"
                  freeMode={true}
                  watchSlidesProgress
                  className="product-thumbnail-slider"
                  breakpoints={{
                     320: { slidesPerView: 2.7 },
                     768: { slidesPerView: 3.5 },
                     1024: { slidesPerView: 4.2 },
                  }}
               >
                  {slides.map((src, idx) => (
                     <SwiperSlide key={idx}>
                        <Image
                           src={src}
                           height={177}
                           width={205}
                           className="attachment-full size-full"
                           alt=""
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>

            {/* Download Brochure */}
            <div className="download-brochure-file">
               <Link
                  target="_blank"
                  className="btn-transparent text-uppercase"
                  href="/"
               >
                  <Download />
                  <span>Download brochure</span>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default ProjectDetailsLeft;
