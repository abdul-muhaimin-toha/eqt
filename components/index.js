import JobListWrapper from './career/job-list-wrapper';
import StoryShowcase from './career/story-showcase';
import WhyWorkWithUs from './career/why-work-with-us';
import AboutDescription from './commons/about-description';
import HeroBanner from './commons/hero-banner';
import Promo from './commons/promo';
import SecondaryHero from './commons/secondary-hero';
import Testimonial from './commons/testimonial';
import Video from './commons/video';
import ContactCards from './contact-us/contact-cards';
import ContactFormSection from './contact-us/contact-form-section';

import About from './home-page/about';
import GetInTouch from './home-page/get-in-touch';
import Hero from './home-page/hero';
import InsightWrapper from './home-page/insight-wrapper';
import PopularDealsWrapper from './home-page/popular-deals-wrapper';
import Projects from './home-page/projects';
import InsightShowcaseWrapper from './insight/insight-showcase-wrapper';
import Cta from './our-approach/cta';
import OurApproach from './our-approach/our-approach';
import WhyChooseUs from './our-approach/why-choose-us';
import BuildingSmarter from './who-we-are/building-smarter';
import VisitorsToVentures from './who-we-are/visitors-to-ventures';
import WhoWeAre from './who-we-are/who-we-are';

const blockComponentsMapping = {
   // home page
   'carbon-fields/hero-section': Hero, // complete
   'carbon-fields/home-about-section': About, // complete
   'carbon-fields/home-project-section': Projects, // complete
   'carbon-fields/what-sets-us-apart': Promo, // complete
   'carbon-fields/popular-projects-section': PopularDealsWrapper, // complete
   'carbon-fields/testimonial-tabs-section': Testimonial, // complete
   'carbon-fields/video-section-section': Video, // complete
   'carbon-fields/latest-insights-section': InsightWrapper, // complete
   'carbon-fields/get-in-touch-section': GetInTouch, // complete

   // who we are page
   'carbon-fields/banner-section': HeroBanner, // complete
   'carbon-fields/description-section': AboutDescription, // complete
   'carbon-fields/who-we-are-section': WhoWeAre, // complete
   'carbon-fields/who-we-are-testimonial-section': VisitorsToVentures, // complete
   'carbon-fields/about-portfolios-section': BuildingSmarter, // complete

   // our approach page
   'carbon-fields/our-approach-section': OurApproach, // complete
   'carbon-fields/approach-description-section': WhyChooseUs, // complete
   'carbon-fields/approach-get-in-touch-section': Cta, // complete

   // career page
   'carbon-fields/career-banner-section': WhyWorkWithUs, // complete
   'carbon-fields/career-life-section': StoryShowcase, // complete
   'carbon-fields/career-list-section': JobListWrapper, // complete

   // carerr details page // complete

   // career apply page // complete

   // contact us page
   'carbon-fields/contact-us-form-section': ContactFormSection, // complete
   'carbon-fields/contact-promo-section': ContactCards, // complete

   // insight page
   'carbon-fields/all-blog-section': InsightShowcaseWrapper, // complete

   // insight details page // complete

   // project page
   'carbon-fields/projects-list-section': SecondaryHero,

   // project details page // done
};

export default blockComponentsMapping;
