import About from '@/components/home-page/about-us/about';
import GetInTouch from '@/components/home-page/get-in-touch';
import Hero from '@/components/home-page/hero';
import PopularDeals from '@/components/home-page/popular-deals';
import Project from '@/components/home-page/project';
import Promo from '@/components/home-page/promo';
import Testimonial from '@/components/home-page/testimonial';
import Video from '@/components/home-page/video';

export default function HomePage() {
   return (
      <>
         <Hero />
         <About />
         <Project />
         <Promo />
         <PopularDeals />
         <Testimonial />
         <Video />
         <GetInTouch />
      </>
   );
}
