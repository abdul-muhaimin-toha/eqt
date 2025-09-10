import Image from 'next/image';
import Counters from '../commons/counters';

function WhoWeAre() {
   return (
      <section className="home-about who-we-are">
         <div className="container">
            <div className="home-about-top">
               <div className="home-about-top-left">
                  <div className="mission-content">
                     <h4 className="heading-h4">Our Mission</h4>
                     <div className="mission-description">
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. A, pretium ut ut est massa rhoncus quam libero.
                           Id justo, rutrum magna egestas turpis quam. Lorem
                           velit scelerisque at et. Egestas posuere enim purus
                           mattis dignissim nullam nibh turpis.
                        </p>
                     </div>
                  </div>

                  <div className="mission-content">
                     <h4 className="heading-h4">Our Vision</h4>
                     <div className="mission-description">
                        <p>
                           EQT was established with a mission to make good
                           people wealthy. We believe that only by doing so do
                           we make tangible change where truth and goodness
                           prevail.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="home-about-top-right">
                  <Image
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Mask-group-9.webp"
                     alt=""
                     width={500}
                     height={550}
                     loading="lazy"
                     className="image-01"
                  />
                  <Image
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Frame-2147223735-1.webp"
                     alt=""
                     width={500}
                     height={550}
                     loading="lazy"
                     className="image-02"
                  />
               </div>
            </div>
            <Counters varient="dark" />
         </div>
      </section>
   );
}

export default WhoWeAre;
