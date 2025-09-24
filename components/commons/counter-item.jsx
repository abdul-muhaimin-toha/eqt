'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

function CounterItem({
   end = 0,
   title = '',
   suffix = '',
   duration = 5,
   varient = 'light',
}) {
   const [isInView, setIsInView] = useState(false);
   const countUpRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => entry.isIntersecting && setIsInView(true),
         { threshold: 0.1 }
      );

      const currentRef = countUpRef.current;
      if (currentRef) observer.observe(currentRef);

      return () => {
         if (currentRef) observer.unobserve(currentRef);
      };
   }, []);

   return (
      <div className="counter-item" data-aos="fade-up">
         <div className="counter-number">
            <span
               ref={countUpRef}
               className={`counter-value heading-h2 font-primary ${
                  varient === 'light' ? 'text-white' : ''
               }`}
            >
               {isInView ? (
                  <CountUp
                     start={0}
                     end={end}
                     duration={duration}
                     separator=","
                  />
               ) : (
                  0
               )}
            </span>
            {suffix && (
               <span
                  className={`suffix heading-h2 font-primary ${
                     varient === 'light' ? 'text-white' : ''
                  }`}
               >
                  {suffix}
               </span>
            )}
         </div>
         <div
            className={`counter-title body-two font-weight-500 text-uppercase ${
               varient === 'light' ? 'text-white' : ''
            }`}
         >
            {title}
         </div>
      </div>
   );
}

export default CounterItem;
