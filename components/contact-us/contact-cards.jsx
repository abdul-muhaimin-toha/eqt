import { getLinkTarget } from '@/utils/utility';
import Image from 'next/image';
import Link from 'next/link';

const ContactCard = ({ approach }) => {
   const {
      feature_image = '',
      open_in_new_tab = false,
      title = '',
      top_title = '',
      url = '#',
   } = approach;

   return (
      <div className="contact-promo-card">
         <div className="contact-promo-card-inner flex flex-col items-center justify-center text-center">
            {feature_image && (
               <Image
                  src={feature_image}
                  alt={title || 'Contact card image'}
                  width={80}
                  height={80}
                  className="feature-bg-image"
               />
            )}
            {top_title && <p className="top-title">{top_title}</p>}
            {title && <p className="title lead-text-two-medium">{title}</p>}
            {url && (
               <Link
                  href={url}
                  target={getLinkTarget(open_in_new_tab)}
                  className="cards-url-item"
               />
            )}
         </div>
      </div>
   );
};

function ContactCards({ data }) {
   const { title = '', approachs = [] } = data.data || {};

   return (
      <section className="contact-promo-list bg-white">
         <div className="container">
            {title && (
               <h3
                  className="heading-h3 contact-promo-title"
                  data-aos="fade-down"
                  data-aos-delay="100"
               >
                  {title}
               </h3>
            )}
            <div className="contact-promo-cards">
               {approachs.map((approach) => (
                  <ContactCard key={approach._id} approach={approach} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default ContactCards;
