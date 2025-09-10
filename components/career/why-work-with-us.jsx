import Image from 'next/image';
import Tick from '../icons/tick';

function WhyWorkWithUs() {
   return (
      <section className="talk-section banner-bottom-section career-banner-bottom-section bg-white">
         <div className="banner-bottom-section-wrapper">
            <div className="container">
               <div className="talk-section-wrapper">
                  <div className="talk-section-left">
                     <Image
                        width={785}
                        height={650}
                        className="feature-bg-image"
                        src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Rectangle-1.webp"
                     />
                  </div>
                  <div className="talk-section-right">
                     <div className="talk-section-right-inner">
                        <h3 className="heading-h3">Why work with us</h3>
                        <p className="short-description inter-body-one color-two">
                           Lorem ipsum dolor sit amet consectetur. Donec egestas
                           dolor vitae ipsum sapien eu. Eget et mattis mauris
                           eu. Massa scelerisque facilisi imperdiet vulputate
                           accumsan. Nulla donec nec orci placerat turpis.
                        </p>
                        <div className="features-list">
                           <ul>
                              {[
                                 'Quality Construction',
                                 'Prime Locations',
                                 'Competitive Pricing',
                                 'Timely Delivery',
                              ].map((feature, idx) => (
                                 <li key={idx}>
                                    <Tick />
                                    <span className="lead-text-one">
                                       {feature}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default WhyWorkWithUs;
