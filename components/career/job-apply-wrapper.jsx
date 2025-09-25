'use client';

import { capitalizeFirstLetter } from '@/utils/utility';
import { useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function JobApplyWrapper({ slug }) {
   const {
      register,
      handleSubmit,
      reset,
      control,
      formState: { errors },
   } = useForm({
      defaultValues: {
         position: capitalizeFirstLetter(slug),
         fullName: '',
         email: '',
         message: '',
         resume: null,
      },
   });

   const [fileName, setFileName] = useState('');
   const [loading, setLoading] = useState(false);
   const fileInputRef = useRef(null);

   const onSubmit = async (data) => {
      setLoading(true);
      try {
         const formData = new FormData();
         formData.append('position', data.position);
         formData.append('fullName', data.fullName);
         formData.append('email', data.email);
         formData.append('message', data.message);
         formData.append('resume', data.resume[0]);

         const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_API}/wp-json/nh/v1/apply-now`,
            {
               method: 'POST',
               body: formData,
            }
         );

         const result = await res.json();
         console.log(result);

         if (!res.ok) throw new Error(result.message || 'Failed to submit');

         toast.success('Your application has been submitted successfully!');

         // Reset all fields
         reset({
            position: capitalizeFirstLetter(slug),
            fullName: '',
            email: '',
            message: '',
            resume: null,
         });
         setFileName('');

         // Reset the file input element
         if (fileInputRef.current) {
            fileInputRef.current.value = null;
         }
      } catch (err) {
         console.error(err);
         toast.error(
            err.message ||
               'Failed to submit your application. Please try again.'
         );
      } finally {
         setLoading(false);
      }
   };

   const ErrorMessage = ({ message }) =>
      message ? (
         <span className="text-red-500 !mt-2 flex !text-sm">{message}</span>
      ) : null;

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
                           value={capitalizeFirstLetter(slug)}
                        />
                     </div>

                     {/* Full Name */}
                     <div className="form-group">
                        <label>Full Name</label>
                        <div className="form-control">
                           <input
                              {...register('fullName', {
                                 required: 'Full Name is required',
                              })}
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control"
                              placeholder="Enter your full name"
                           />
                           <ErrorMessage message={errors.fullName?.message} />
                        </div>
                     </div>

                     {/* Email */}
                     <div className="form-group">
                        <label>Email</label>
                        <div className="form-control">
                           <input
                              {...register('email', {
                                 required: 'Email is required',
                                 pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email address',
                                 },
                              })}
                              size={40}
                              maxLength={400}
                              className="wpcf7-form-control"
                              placeholder="Enter your email"
                              type="email"
                           />
                           <ErrorMessage message={errors.email?.message} />
                        </div>
                     </div>

                     {/* Message */}
                     <div className="form-group">
                        <label className="textarea-label">Message</label>
                        <div className="form-control">
                           <textarea
                              {...register('message', {
                                 required: 'Message is required',
                              })}
                              cols={40}
                              rows={10}
                              maxLength={2000}
                              className="wpcf7-form-control"
                              placeholder="Write your message here..."
                           />
                           <ErrorMessage message={errors.message?.message} />
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
                              <Controller
                                 name="resume"
                                 control={control}
                                 rules={{
                                    required: 'Resume is required',
                                    validate: {
                                       fileType: (files) => {
                                          const file = files?.[0];
                                          if (!file) return true;
                                          const validTypes = [
                                             'application/pdf',
                                             'application/x-pdf',
                                          ];
                                          const isPdfMime = validTypes.includes(
                                             file.type
                                          );
                                          const isPdfExt = file.name
                                             .toLowerCase()
                                             .endsWith('.pdf');
                                          return (
                                             isPdfMime ||
                                             isPdfExt ||
                                             'Only PDF files are allowed'
                                          );
                                       },
                                       fileSize: (files) => {
                                          const file = files?.[0];
                                          if (!file) return true;
                                          return (
                                             file.size <= 5 * 1024 * 1024 ||
                                             'File size must be less than 5MB'
                                          );
                                       },
                                    },
                                 }}
                                 render={({ field }) => (
                                    <input
                                       ref={(e) => {
                                          field.ref(e);
                                          fileInputRef.current = e;
                                       }}
                                       type="file"
                                       accept=".pdf"
                                       className="wpcf7-form-control resume-uploader"
                                       onChange={(e) => {
                                          field.onChange(e.target.files);
                                          const file = e.target.files?.[0];
                                          setFileName(file ? file.name : '');
                                       }}
                                    />
                                 )}
                              />
                           </div>
                           <div className="filename">
                              {fileName && <span>{fileName}</span>}
                           </div>
                        </label>
                        <div className="help-text color-two">
                           Upload file size max 5MB. Accept file (.pdf)
                        </div>
                        <ErrorMessage message={errors.resume?.message} />
                     </div>

                     {/* Submit */}
                     <button
                        type="submit"
                        disabled={loading}
                        className="wpcf7-form-control wpcf7-submit submit-btn btn-primary text-uppercase"
                     >
                        {loading ? 'Submitting...' : 'Submit Now'}
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}

export default JobApplyWrapper;
