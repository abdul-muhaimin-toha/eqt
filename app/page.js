import About from '@/components/home-page/about';
import GetInTouch from '@/components/home-page/get-in-touch';
import Hero from '@/components/home-page/hero';
import PopularDeals from '@/components/home-page/popular-deals';
import Project from '@/components/home-page/project';
import Promo from '@/components/commons/promo';
import Testimonial from '@/components/commons/testimonial';
import Video from '@/components/commons/video';
import LatestInsights from '@/components/home-page/latest-insights';

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
         <LatestInsights />
         <GetInTouch />
      </>
   );
}
