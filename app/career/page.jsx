import JobLists from '@/components/career/job-lists';
import StoryShowcase from '@/components/career/story-showcase';
import WhyWorkWithUs from '@/components/career/why-work-with-us';
import Testimonial from '@/components/commons/testimonial';
import Hero from '@/components/who-we-are/hero';

export default function CareerPage() {
   return (
      <>
         <Hero
            title="Career"
            bgImage="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-4-2-scaled.webp"
         />
         <WhyWorkWithUs />
         <StoryShowcase />
         <JobLists />
         <Testimonial />
      </>
   );
}
