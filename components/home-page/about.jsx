import Image from 'next/image';
import Link from 'next/link';
import Counters from '../commons/counters';

function About() {
   return (
      <section className="home-about">
         <Image
            src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Frame-2147223758.webp"
            alt=""
            className="home-about-bg"
            width={1930}
            height={1040}
         />
         <div className="home-about-bg-overlay" />
         <div className="container">
            <div className="home-about-top">
               <div className="home-about-top-left">
                  <div className="body-two font-weight-500 top-title text-uppercase text-white">
                     Why EQT?
                  </div>
                  <h2 className="title text-white heading-h2">
                     Our Journey to Transform
                  </h2>
                  <p className="text-white short-description">
                     EQT was established with a mission to make good people
                     wealthy. We believe that only by doing so do we make
                     tangible change where truth and goodness prevail.
                  </p>
                  <Link
                     href="#"
                     className="btn-transparent text-uppercase btn-white"
                  >
                     <span>Learn More</span>
                  </Link>
               </div>
               <div className="home-about-top-right">
                  <Image
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Mask-group-8.webp"
                     alt=""
                     className="image-01 for-desktop"
                     width={458}
                     height={554}
                  />
                  <Image
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Mask-group-2.png"
                     alt=""
                     className="image-01 for-mobile"
                     width={458}
                     height={554}
                  />
                  <Image
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Frame-2147223735.webp"
                     alt=""
                     className="image-02 for-desktop"
                     width={347}
                     height={280}
                  />
                  <Image
                     src="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Mask-group-3.png"
                     alt=""
                     className="image-02 for-mobile"
                     width={347}
                     height={280}
                  />
               </div>
            </div>
            <Counters />
         </div>
      </section>
   );
}

export default About;
