'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

const ContactFormLeft = () => {
   const { register, handleSubmit, reset } = useForm();

   const onSubmit = (data) => {
      console.log('Form Data:', data);
      reset();
   };

   return (
      <div className="talk-section-left">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
               <input
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control"
                  placeholder="Enter your full name"
                  type="text"
                  {...register('fullName', { required: true })}
               />
            </div>
            <div className="form-group">
               <input
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control"
                  placeholder="Enter your email"
                  type="email"
                  {...register('email', { required: true })}
               />
            </div>
            <div className="form-group">
               <input
                  size={40}
                  maxLength={400}
                  className="wpcf7-form-control"
                  placeholder="Your contact"
                  type="text"
                  {...register('contact')}
               />
            </div>
            <div className="form-group">
               <textarea
                  cols={40}
                  rows={10}
                  maxLength={2000}
                  className="wpcf7-form-control"
                  placeholder="Write your message here..."
                  {...register('message', { required: true })}
               />
            </div>
            <div className="submit-btn-wrapper">
               <input
                  className="wpcf7-form-control"
                  type="submit"
                  value="Send Message"
               />
            </div>
         </form>
      </div>
   );
};

const ContactFormRight = () => {
   return (
      <div className="talk-section-right">
         <h2 className="heading-h2">Let’s Talk</h2>
         <p className="short-description inter-body-one">
            We would love to hear from you!
         </p>
         <p className="lead-text-one address">
            Unit-A2, House-73, Rd. No. 4, Banani, Dhaka-1212
         </p>
         <div className="contact-phone">
            <span>Contact</span>
            <h3 className="heading-h3">
               <Link href="tel:+8802 44806598">+8802 44806598</Link>
            </h3>
         </div>
         <Link className="email lead-text-one" href="mailto:info@eqtbd.com">
            info@eqtbd.com
         </Link>
         <Link
            href="/"
            target="_blank"
            className="btn-transparent text-uppercase"
         >
            <span>Get Direction on google map</span>
         </Link>
      </div>
   );
};

function ContactForm() {
   return (
      <section className="talk-section banner-bottom-section bg-white">
         <div className="banner-bottom-section-wrapper">
            <div className="container">
               <div className="talk-section-wrapper">
                  <ContactFormLeft />
                  <ContactFormRight />
               </div>
            </div>
         </div>
      </section>
   );
}

export default ContactForm;
