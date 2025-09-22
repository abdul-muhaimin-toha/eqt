import Link from 'next/link';
import { ContactForm } from './contact-form';

const ContactFormRight = ({ data }) => {
   const {
      address = '',
      email = '',
      map_location_link = '',
      phone = '',
      short_description = '',
      title = '',
   } = data?.data || {};

   return (
      <div className="talk-section-right">
         {title && <h2 className="heading-h2">{title}</h2>}
         {short_description && (
            <p className="short-description inter-body-one">
               {short_description}
            </p>
         )}
         {address && <p className="lead-text-one address">{address}</p>}

         {phone && (
            <div className="contact-phone">
               <span>Contact</span>
               <h3 className="heading-h3">
                  <Link href={`tel:${phone}`}>{phone}</Link>
               </h3>
            </div>
         )}

         {email && (
            <Link className="email lead-text-one" href={`mailto:${email}`}>
               {email}
            </Link>
         )}

         {map_location_link && (
            <Link
               href={map_location_link}
               target="_blank"
               rel="noopener noreferrer"
               className="btn-transparent text-uppercase"
            >
               <span>Get Direction on Google Map</span>
            </Link>
         )}
      </div>
   );
};

function ContactFormSection({ data }) {
   return (
      <section className="talk-section banner-bottom-section bg-white">
         <div className="banner-bottom-section-wrapper">
            <div className="container">
               <div className="talk-section-wrapper">
                  <ContactForm />
                  <ContactFormRight data={data} />
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactFormSection;
