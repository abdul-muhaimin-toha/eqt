'use client';

import { useForm } from 'react-hook-form';

function GetInTouchForm() {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const onSubmit = (formData) => {
      console.log('Form Submitted:', formData);
      reset();
   };

   return (
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
            {errors.fullName && (
               <span className="text-white !mt-2 flex !pl-2 md:!pl-3 lg:!pl-4">
                  Full name is required
               </span>
            )}
         </div>

         <div className="form-group">
            <input
               size={40}
               maxLength={400}
               className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
               placeholder="Enter your email *"
               type="text"
               {...register('email', {
                  required: 'Email is required',
                  pattern: {
                     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                     message: 'Invalid email address',
                  },
               })}
            />
            {errors.email && (
               <span className="text-white !mt-2 flex !pl-2 md:!pl-3 lg:!pl-4">
                  Valid email is required
               </span>
            )}
         </div>

         <div className="form-group">
            <input
               size={40}
               maxLength={400}
               className="wpcf7-form-control wpcf7-text"
               placeholder="Your contact number"
               type="text"
               {...register('contact')}
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
            {errors.message && (
               <span className="text-white !mt-2 flex !pl-2 md:!pl-3 lg:!pl-4">
                  Message is required
               </span>
            )}
         </div>

         <div className="submit-btn-wrapper">
            <div className="project-button-wrapper">
               <button type="submit" className="btn-primary">
                  Send Message
               </button>
            </div>
         </div>
      </form>
   );
}

export default GetInTouchForm;
