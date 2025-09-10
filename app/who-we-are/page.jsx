import Video from '@/components/commons/video';
import Promo from '@/components/commons/promo';
import AboutDescription from '@/components/who-we-are/about-description';
import Hero from '@/components/who-we-are/hero';
import WhoWeAre from '@/components/who-we-are/who-we-are';
import VisitorsToVentures from '@/components/who-we-are/visitors-to-ventures';

export default function WhoWeArePage() {
   return (
      <>
         <Hero />
         <AboutDescription />
         <WhoWeAre />
         <Video />
         <Promo />
         <VisitorsToVentures />
      </>
   );
}
