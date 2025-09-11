'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function JobApplyPage() {
   const { register, handleSubmit } = useForm();
   const [fileName, setFileName] = useState('');

   const onSubmit = (data) => {
      console.log('Form submitted:', data);
   };

   return (
      <section className="apply-now-section">
         <div className="container">
            <div className="apply-now-container">
               <div className="apply-now-header">
                  <h2 className="heading-h2 text-center">Apply Now</h2>
                  <p className="inter-body-one color-two text-center">
                     We’re glad you’re here. Fill out this form and one of our
                     client representatives will get back to you.
                  </p>
               </div>

               <div className="contact-form apply-now-form">
                  <form
                     aria-label="Contact form"
                     onSubmit={handleSubmit(onSubmit)}
                  >
                     {/* Position (readonly) */}
                     <div className="job-position inter-body-one">
                        <label>Position:</label>
                        <input
                           {...register('position')}
                           size={40}
                           maxLength={400}
                           className="wpcf7-form-control job-title-name"
                           readOnly
                           type="text"
                           value="Frontend Engineer" // dummy value, can be dynamic
                        />
                     </div>

                     {/* Full Name */}
                     <div className="form-group">
                        <label>Full Name</label>
                        <div className="form-control">
                           <input
                              {...register('fullName')}
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control"
                              placeholder="Enter your full name"
                              type="text"
                           />
                        </div>
                     </div>

                     {/* Email */}
                     <div className="form-group">
                        <label>Email</label>
                        <div className="form-control">
                           <input
                              {...register('email')}
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control"
                              placeholder="Enter your email"
                              type="email"
                           />
                        </div>
                     </div>

                     {/* Message */}
                     <div className="form-group">
                        <label className="textarea-label">Message</label>
                        <div className="form-control">
                           <textarea
                              {...register('message')}
                              cols={40}
                              rows={10}
                              maxLength={2000}
                              className="wpcf7-form-control"
                              placeholder="Write your message here..."
                           />
                        </div>
                     </div>

                     {/* Resume Upload */}
                     <div className="form-group resume-field">
                        <label>
                           <p>Attach your Resume</p>
                           <div className="form-group-control-svg">
                              <svg
                                 width={24}
                                 height={24}
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    d="M21.4383 11.0509L12.2483 20.2409C11.1225 21.3667 9.59552 21.9992 8.00334 21.9992C6.41115 21.9992 4.88418 21.3667 3.75834 20.2409C2.63249 19.1151 2 17.5881 2 15.9959C2 14.4037 2.63249 12.8767 3.75834 11.7509L12.9483 2.5609C13.6989 1.81033 14.7169 1.38867 15.7783 1.38867C16.8398 1.38867 17.8578 1.81033 18.6083 2.5609C19.3589 3.31146 19.7806 4.32944 19.7806 5.3909C19.7806 6.45235 19.3589 7.47033 18.6083 8.2209L9.40834 17.4109C9.03306 17.7862 8.52406 17.997 7.99334 17.997C7.46261 17.997 6.95362 17.7862 6.57834 17.4109C6.20306 17.0356 5.99222 16.5266 5.99222 15.9959C5.99222 15.4652 6.20306 14.9562 6.57834 14.5809L15.0683 6.1009"
                                    stroke="#173A1C"
                                    strokeOpacity="0.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 />
                              </svg>
                              <span>Click to upload file</span>
                           </div>
                           <div className="form-control">
                              <input
                                 {...register('resume')}
                                 size={40}
                                 className="wpcf7-form-control resume-uploader"
                                 type="file"
                                 onChange={(e) => {
                                    if (e.target.files?.length > 0) {
                                       setFileName(e.target.files[0].name);
                                    } else {
                                       setFileName('');
                                    }
                                 }}
                              />
                           </div>
                           <div className="filename">
                              {fileName && <span>{fileName}</span>}
                           </div>
                        </label>
                        <div className="help-text color-two">
                           Upload file size max 5MB. Accept file (.pdf**)
                        </div>
                     </div>

                     {/* Submit */}
                     <input
                        className="wpcf7-form-control wpcf7-submit submit-btn btn-primary text-uppercase"
                        type="submit"
                        value="Submit Now"
                     />
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
