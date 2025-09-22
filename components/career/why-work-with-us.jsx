import Image from 'next/image';
import Tick from '../icons/tick';

function WhyWorkWithUs({ data }) {
   const {
      feature_image = '',
      features = [],
      short_description = '',
      title = '',
   } = data?.data || {};

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
                        src={feature_image}
                        alt={title}
                     />
                  </div>
                  <div className="talk-section-right">
                     <div className="talk-section-right-inner">
                        <h3 className="heading-h3">{title}</h3>
                        <p className="short-description inter-body-one color-two">
                           {short_description}
                        </p>
                        <div className="features-list">
                           <ul>
                              {features.length > 0 && (
                                 <div className="features-list">
                                    <ul>
                                       {features.map((feature) => (
                                          <li key={feature._id}>
                                             <Tick />
                                             <span className="lead-text-one">
                                                {feature.title}
                                             </span>
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              )}
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
