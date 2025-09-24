import { getLinkTarget, splitBreakLine } from '@/utils/utility';
import Link from 'next/link';

function Hero({ data }) {
   const {
      background_banner = '',
      background_video = '',
      btn_text = '',
      btn_url = '#',
      description = '',
      open_in_new_tab = false,
      title = '',
   } = data?.data || {};

   const titleParts = splitBreakLine(title || []);

   return (
      <section className="hero-section">
         {background_video && (
            <video
               poster={background_banner}
               className="hero-section-background"
               autoPlay
               loop
               muted
            >
               <source src={background_video} type="video/mp4" />
            </video>
         )}
         <div className="hero-section-background-overlay" />
         <div className="hero-section-content">
            <div className="hero-title-wrapper">
               {titleParts.length > 0 && (
                  <h1 className="large-h1 text-white">
                     {titleParts.map((part, index) => (
                        <div key={index} data-aos="fade-up">
                           {part}
                        </div>
                     ))}
                  </h1>
               )}
            </div>
            {description && (
               <div
                  className="hero-section-description text-white"
                  data-aos="fade-up"
                  data-aos-delay="300"
               >
                  {description}
               </div>
            )}
            {btn_url && btn_text && (
               <div
                  className="hero-section-btn"
                  data-aos="fade-up"
                  data-aos-delay="600"
               >
                  <Link
                     target={getLinkTarget(open_in_new_tab)}
                     href={btn_url}
                     className="btn-primary btn-white"
                  >
                     <span>{btn_text}</span>
                  </Link>
               </div>
            )}
         </div>
      </section>
   );
}

export default Hero;
