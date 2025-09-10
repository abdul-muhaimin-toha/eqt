'use client';

import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const CounterItem = ({
   end,
   title,
   suffix = '',
   duration = 4,
   varient = 'light',
}) => {
   const [isInView, setIsInView] = useState(false);
   const countUpRef = useRef(null);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsInView(true);
            }
         },
         { threshold: 0.1 }
      );

      const currentRef = countUpRef.current;
      if (currentRef) {
         observer.observe(currentRef);
      }

      return () => {
         if (currentRef) observer.unobserve(currentRef);
      };
   }, []);

   return (
      <div className="counter-item">
         <div className="counter-number">
            <span
               ref={countUpRef}
               className={`counter-value heading-h2  font-primary ${
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
                  className={`suffix  heading-h2 font-primary ${
                     varient === 'light' ? 'text-white' : ''
                  }`}
               >
                  {suffix}
               </span>
            )}
         </div>
         <div
            className={`counter-title body-two font-weight-500  text-uppercase ${
               varient === 'light' ? 'text-white' : ''
            }`}
         >
            {title}
         </div>
      </div>
   );
};

const Counters = ({ varient = 'light' }) => {
   const counterData = [
      { end: 250, title: 'Happy Clients', suffix: '+' },
      { end: 1100, title: 'Projects Delivered', suffix: '+' },
      { end: 20, title: 'Cities Served', suffix: '+' },
      { end: 10, title: 'Years of Experience', suffix: '+' },
   ];

   return (
      <div id="counter-section" className="counter-block flex flex-wrap gap-6">
         {counterData.map((counter, index) => (
            <CounterItem
               varient={varient}
               key={index}
               end={counter.end}
               title={counter.title}
               suffix={counter.suffix}
            />
         ))}
      </div>
   );
};

export default Counters;
