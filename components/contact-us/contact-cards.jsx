import Image from 'next/image';
import Link from 'next/link';

const contactData = [
   {
      title: '24/7 Emergency Call',
      text: '+8801847360360',
      icon: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/local_phone_black_24dp-1.svg',
      link: 'tel:+8801847360360',
      target: '_self',
   },
   {
      title: 'Email Us',
      text: 'info@eqtbd.com',
      icon: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/mail-1.svg',
      link: 'mailto:info@eqtbd.com',
      target: '_self',
   },
   {
      title: 'Our Corporate office',
      text: 'Rupayan Prime, Plot 02, Road 07, Dhanmondi, Dhaka – 1205',
      icon: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/location_on_black_24dp-1.svg',
      link: 'https://maps.app.goo.gl/Zb77BFyDRKxuTaH38',
      target: '_blank',
   },
   {
      title: 'Facebook',
      text: '',
      icon: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/5305153_fb_facebook_facebook-logo_icon-1.svg',
      link: '#',
      target: '_blank',
   },
   {
      title: 'Linkedin',
      text: '',
      icon: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/1269936_linkedin_social_social-media_icon-1.svg',
      link: '#',
      target: '_self',
   },
   {
      title: 'Twitter',
      text: '',
      icon: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/Frame-3.svg',
      link: '#',
      target: '_self',
   },
];

const ContactCard = ({ title, text, icon, link, target }) => (
   <div className="contact-promo-card">
      <div className="contact-promo-card-inner items-center justify-center flex flex-col text-center">
         <Image
            src={icon}
            alt={title}
            width={80}
            height={80}
            className="feature-bg-image"
         />
         {title && <p className="top-title">{title}</p>}
         {text && <p className="title lead-text-two-medium">{text}</p>}
         <Link className="cards-url-item" href={link} target={target}></Link>
      </div>
   </div>
);

function ContactCards() {
   return (
      <section className="contact-promo-list bg-white">
         <div className="container">
            <h3 className="heading-h3 contact-promo-title">
               Contact us via email or call in case of any emergency.
            </h3>
            <div className="contact-promo-cards">
               {contactData.map((contact, index) => (
                  <ContactCard key={index} {...contact} />
               ))}
            </div>
         </div>
      </section>
   );
}

export default ContactCards;
