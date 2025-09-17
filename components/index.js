import AboutDescription from './commons/about-description';
import HeroBanner from './commons/hero-banner';
import Promo from './commons/promo';
import Testimonial from './commons/testimonial';
import Video from './commons/video';
import About from './home-page/about';
import GetInTouch from './home-page/get-in-touch';
import Hero from './home-page/hero';
import LatestInsights from './home-page/latest-insights';
import PopularDeals from './home-page/popular-deals';
import Project from './home-page/project';
import Cta from './our-approach/cta';
import OurApproach from './our-approach/our-approach';
import WhyChooseUs from './our-approach/why-choose-us';
import BuildingSmarter from './who-we-are/building-smarter';
import VisitorsToVentures from './who-we-are/visitors-to-ventures';
import WhoWeAre from './who-we-are/who-we-are';

const blockComponentsMapping = {
   'carbon-fields/hero-section': Hero, //complete
   'carbon-fields/home-about-section': About, //complete
   'carbon-fields/home-project-section': Project,
   'carbon-fields/what-sets-us-apart': Promo, //complete
   'carbon-fields/popular-projects-section': PopularDeals,
   'carbon-fields/testimonial-tabs-section': Testimonial, //complete
   'carbon-fields/video-section-section': Video, //complete // should also give a backup image // also still gets id in here
   'carbon-fields/latest-insights-section': LatestInsights, // dont get insights array in here
   'carbon-fields/get-in-touch-section': GetInTouch, // without form functionality other done

   'carbon-fields/banner-section': HeroBanner, //complete
   'carbon-fields/description-section': AboutDescription, //complete
   'carbon-fields/who-we-are-section': WhoWeAre, //complete
   'carbon-fields/who-we-are-testimonial-section': VisitorsToVentures, //complete
   'carbon-fields/about-portfolios-section': BuildingSmarter, //complete

   'carbon-fields/our-approach-section': OurApproach,
   'carbon-fields/approach-description-section': WhyChooseUs,
   'carbon-fields/approach-get-in-touch-section': Cta,
};

export default blockComponentsMapping;
