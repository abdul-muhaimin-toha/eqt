import Video from '@/components/commons/video';
import Promo from '@/components/commons/promo';
import AboutDescription from '@/components/commons/about-description';
import Hero from '@/components/commons/hero';
import WhoWeAre from '@/components/who-we-are/who-we-are';
import VisitorsToVentures from '@/components/who-we-are/visitors-to-ventures';
import BuildingSmarter from '@/components/who-we-are/building-smarter';

export default function WhoWeArePage() {
   return (
      <>
         <Hero
            title="Who We Are"
            bgImage="https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/08/image-8-scaled.webp"
         />
         <AboutDescription
            title="Our Journey to Transform"
            descriptions={[
               'EQT was established with a mission to make good people wealthy. We believe that only by doing so do we maketangible change where truth and goodness prevail.',
               'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, pretium ut ut est massa rhoncus quam libero. Id justo, rutrum magna egestas turpis quam. Lorem velit scelerisque at et. Egestas posuere enim purus mattis dignissim nullam nibh turpis. Elit tortor laoreet erat nulla molestie. Cursus pellentesque nibh cras tempor, vulputate viverra eu, ultricies. Egestas netus nulla vulputate at accumsan, sed orci id. At pellentesque at gravida quam et ornare enim, parturient. Vitae congue erat sollicitudin cras sagittis. Leo auctor elementum iaculis morbi a dictum in sit risus.',
            ]}
         />
         <WhoWeAre />
         <Video />
         <Promo />
         <VisitorsToVentures />
         <BuildingSmarter />
      </>
   );
}
