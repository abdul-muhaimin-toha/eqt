import Image from 'next/image';
import Counters from '../commons/counters';
import parse from 'html-react-parser';

function WhoWeAre({ data }) {
   const {
      counters = [],
      image_one,
      image_two,
      mission_description,
      mission_title,
      vision_description,
      vision_title,
   } = data?.data || {};

   return (
      <section className="home-about who-we-are">
         <div className="container">
            <div className="home-about-top">
               <div className="home-about-top-left">
                  <div
                     className="mission-content"
                     data-aos="fade-up"
                     data-aos-delay="100"
                  >
                     <h4 className="heading-h4">{mission_title}</h4>
                     <div className="mission-description">
                        {mission_description
                           ? parse(mission_description, {
                                replace: (domNode) => {
                                   if (domNode.name === 'script') return null;
                                },
                             })
                           : null}
                     </div>
                  </div>

                  <div
                     className="mission-content"
                     data-aos="fade-up"
                     data-aos-delay="100"
                  >
                     <h4 className="heading-h4">{vision_title}</h4>
                     <div className="mission-description">
                        {vision_description
                           ? parse(vision_description, {
                                replace: (domNode) => {
                                   if (domNode.name === 'script') return null;
                                },
                             })
                           : null}
                     </div>
                  </div>
               </div>
               <div className="home-about-top-right">
                  <Image
                     src={image_one}
                     alt={mission_title}
                     width={500}
                     height={550}
                     loading="lazy"
                     className="image-01"
                  />
                  <Image
                     src={image_two}
                     alt={vision_title}
                     width={500}
                     height={550}
                     loading="lazy"
                     className="image-02"
                  />
               </div>
            </div>
            <Counters counters={counters} varient="dark" />
         </div>
      </section>
   );
}

export default WhoWeAre;
