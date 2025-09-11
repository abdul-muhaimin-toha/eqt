import Hero from '@/components/commons/hero';
import ContactCards from '@/components/contact-us/contact-cards';
import ContactForm from '@/components/contact-us/contact-form';

export default function ContactUsPage() {
   return (
      <>
         <Hero
            title="Contact Us"
            bgImage="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-4-1.webp"
         />
         <ContactForm />
         <ContactCards />
      </>
   );
}
