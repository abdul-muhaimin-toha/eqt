import Image from 'next/image';
import Link from 'next/link';

function Cta({ data }) {
   // ✅ Safe destructuring with defaults
   const {
      btn_custom_url = '#',
      btn_title = '',
      feature_image = '',
      title = '',
   } = data?.data || {};

   console.log(data.data);

   return (
      <section className="banner-section get-in-touch">
         {feature_image && (
            <Image
               src={feature_image}
               alt={title || 'CTA background image'}
               className="feature-bg-image"
               fill
               priority
            />
         )}

         <div className="get-in-touch-content">
            {title && <h2 className="heading-h2 text-white">{title}</h2>}

            {btn_title && (
               <Link
                  className="btn-primary text-uppercase"
                  href={btn_custom_url}
               >
                  <span>{btn_title}</span>
               </Link>
            )}
         </div>
      </section>
   );
}

export default Cta;
