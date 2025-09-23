'use client';

import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Link from 'next/link';
import Download from '../icons/download';
import Image from 'next/image';

function ProjectDetailsLeft({ sliders = [], brochureFile = '' }) {
   const [thumbsSwiper, setThumbsSwiper] = useState(null);
   const [mainSwiper, setMainSwiper] = useState(null);
   const prevRef = useRef(null);
   const nextRef = useRef(null);

   useEffect(() => {
      if (mainSwiper && prevRef.current && nextRef.current) {
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
                  modules={[Navigation, Thumbs]}
                  spaceBetween={10}
                  slidesPerView={1}
                  thumbs={{ swiper: thumbsSwiper }}
                  onSwiper={setMainSwiper}
                  className="product-gallery-slider"
               >
                  {sliders.map((slider) => (
                     <SwiperSlide key={slider?.id || slider?.link}>
                        <Image
                           src={slider?.link || '/placeholder.jpg'}
                           width={895}
                           height={880}
                           className="attachment-full size-full"
                           alt={slider?.alt || 'Slider image'}
                        />
                     </SwiperSlide>
                  ))}

                  {/* Custom Navigation Buttons */}
                  <div ref={nextRef} className="swiper-button-next">
                     {/* SVG Next */}
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
                     {/* SVG Prev */}
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
                  slidesPerView={2.5}
                  freeMode={true}
                  watchSlidesProgress
                  className="product-thumbnail-slider"
                  breakpoints={{
                     320: { slidesPerView: 2.7 },
                     768: { slidesPerView: 3.5 },
                     1024: { slidesPerView: 4.2 },
                  }}
               >
                  {sliders.map((slider) => (
                     <SwiperSlide key={slider?.id || slider?.link}>
                        <Image
                           src={slider?.link || '/placeholder.jpg'}
                           height={177}
                           width={205}
                           className="attachment-full size-full"
                           alt={slider?.alt || 'Slider thumbnail'}
                        />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>

            {/* Download Brochure */}
            {brochureFile && (
               <div className="download-brochure-file">
                  <Link
                     target="_blank"
                     className="btn-transparent text-uppercase"
                     href={brochureFile}
                  >
                     <Download />
                     <span>Download brochure</span>
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
}

export default ProjectDetailsLeft;
