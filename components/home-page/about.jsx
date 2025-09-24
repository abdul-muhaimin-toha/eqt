import Image from 'next/image';
import Link from 'next/link';
import Counters from '../commons/counters';

function About({ data }) {
   const {
      background_image = '',
      btn_title = '',
      btn_url = '#',
      counters = [],
      image_one = '',
      image_one_mobile = '',
      image_two = '',
      image_two_mobile = '',
      short_description = '',
      title = '',
      top_title = '',
   } = data?.data || {};

   return (
      <section className="home-about">
         {background_image && (
            <Image
               src={background_image}
               alt={title}
               className="home-about-bg"
               width={1930}
               height={1040}
            />
         )}
         <div className="home-about-bg-overlay" />
         <div className="container">
            <div className="home-about-top">
               <div className="home-about-top-left">
                  {top_title && (
                     <div className="body-two font-weight-500 top-title text-uppercase text-white">
                        {top_title}
                     </div>
                  )}
                  {title && (
                     <h2
                        className="title text-white heading-h2"
                        data-aos="fade-up"
                     >
                        {title}
                     </h2>
                  )}
                  {short_description && (
                     <p
                        className="text-white short-description"
                        data-aos="fade-up"
                        data-aos-delay="300"
                     >
                        {short_description}
                     </p>
                  )}
                  {btn_url && btn_title && (
                     <Link
                        href={btn_url}
                        className="btn-transparent text-uppercase btn-white"
                        data-aos="fade-up"
                        data-aos-delay="600"
                     >
                        <span>{btn_title}</span>
                     </Link>
                  )}
               </div>
               <div className="home-about-top-right">
                  {image_one && (
                     <Image
                        src={image_one}
                        alt={title}
                        className="image-01 for-desktop"
                        width={458}
                        height={554}
                     />
                  )}
                  {image_one_mobile && (
                     <Image
                        src={image_one_mobile}
                        alt={title}
                        className="image-01 for-mobile"
                        width={458}
                        height={554}
                     />
                  )}
                  {image_two && (
                     <Image
                        src={image_two}
                        alt={title}
                        className="image-02 for-desktop"
                        width={347}
                        height={280}
                     />
                  )}
                  {image_two_mobile && (
                     <Image
                        src={image_two_mobile}
                        alt={title}
                        className="image-02 for-mobile"
                        width={347}
                        height={280}
                     />
                  )}
               </div>
            </div>
            <Counters counters={counters} />
         </div>
      </section>
   );
}

export default About;
