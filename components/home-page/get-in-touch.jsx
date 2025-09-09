'use client';

import { useForm } from 'react-hook-form';

function GetInTouch() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log('Form Submitted:', data);
   };

   return (
      <section className="get-in-touch-section">
         <div className="container">
            {/* Background with overlay */}
            <div className="background-container">
               <div
                  className="background-image"
                  style={{
                     backgroundImage:
                        'url("https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/banner.webp")',
                  }}
               />
               <div className="background-overlay" />
            </div>
            <div className="content-container">
               {/* Section Titles */}
               <div className="titles-wrapper">
                  <div className="section-title text-white text-center font-primary heading-h2">
                     Let’s Talk
                  </div>
                  <div className="top-title text-center text-white body-one-regular">
                     We would love&nbsp;to hear from you!&nbsp;
                  </div>
                  <div className="touch-form">
                     <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                           <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              placeholder="Enter your full name *"
                              type="text"
                              {...register('fullName', { required: true })}
                           />
                        </div>
                        <div className="form-group">
                           <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                              placeholder="Enter your email *"
                              type="email"
                              {...register('email', { required: true })}
                           />
                        </div>
                        <div className="form-group">
                           <input
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                              placeholder="Your contact number"
                              type="text"
                              {...register('contact', { required: false })}
                           />
                        </div>
                        <div className="form-group">
                           <textarea
                              cols={40}
                              rows={10}
                              maxLength={2000}
                              className="wpcf7-form-control wpcf7-textarea"
                              placeholder="Write your message here..."
                              {...register('message', { required: true })}
                           />
                        </div>
                        <div className="submit-btn-wrapper">
                           <div className="project-button-wrapper">
                              <button type="submit" className="btn-primary">
                                 Send Message
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default GetInTouch;
