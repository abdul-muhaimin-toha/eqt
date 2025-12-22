'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/wp-json/nh/v1/cform`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error('Failed to submit form');

      const data = await res.json();

      toast.success('Message sent successfully!');

      reset();
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const ErrorMessage = ({ message }) =>
    message ? (
      <span className="text-red-500 !mt-2 flex !pl-2 md:!pl-3 lg:!pl-4 !text-sm">
        {message}
      </span>
    ) : null;

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
            {...register('fullName', {
              required: 'Full name is required',
            })}
          />
          <ErrorMessage message={errors.fullName?.message} />
        </div>
        <div className="form-group">
          <input
            size={40}
            maxLength={400}
            className="wpcf7-form-control"
            placeholder="Enter your email"
            type="text"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address',
              },
            })}
          />
          <ErrorMessage message={errors.email?.message} />
        </div>
        <div className="form-group">
          <input
            size={40}
            maxLength={400}
            className="wpcf7-form-control"
            placeholder="Your contact"
            type="text"
            {...register('phone')}
          />
        </div>
        <div className="form-group">
          <textarea
            cols={40}
            rows={10}
            maxLength={2000}
            className="wpcf7-form-control"
            placeholder="Write your message here..."
            {...register('message', { required: 'Message is required' })}
          />
          <ErrorMessage message={errors.message?.message} />
        </div>
        <div className="submit-btn-wrapper">
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};
