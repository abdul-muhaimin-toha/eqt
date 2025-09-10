import Promo from '@/components/commons/promo';
import AboutDescription from '@/components/commons/about-description';
import Hero from '@/components/who-we-are/hero';
import OurApproach from '@/components/our-approach/our-approach';
import WhyChooseUs from '@/components/our-approach/why-choose-us';
import Cta from '@/components/our-approach/cta';

export default function OurApproachPage() {
   return (
      <>
         <Hero
            title="Our Approach"
            bgImage="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-4-scaled.webp"
         />
         <AboutDescription
            title="Guided by Purpose. Driven by Results."
            descriptions={[
               'At EQT, our approach is rooted in precision, innovation, and accountability. We focus on understanding your needs and translating them into robust, cost-effective engineering solutions. Every project we undertake reflects our commitment to quality, safety, and sustainability.',
               'We combine deep technical knowledge, a collaborative mindset, and sustainable practices to deliver value-driven engineering and project solutions.',
            ]}
            buttonDetails={{ link: '/', title: 'Learn More About Us' }}
         />
         <OurApproach />
         <Promo />
         <WhyChooseUs />
         <Cta />
      </>
   );
}
