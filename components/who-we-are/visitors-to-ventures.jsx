import VisitorsToVenturesSlider from './visitors-to-ventures-slider';

function VisitorsToVentures({ data }) {
   const testimonial = data?.data?.testimonial || [];
   const title = data?.data?.title || '';

   return (
      <section className="nh-projects-slider bg-white who-we-are-about">
         {/* Header */}
         <div className="container">
            <div className="nh-project-top">
               <h2 className="nh-project-title heading-h2" data-aos="fade-up">
                  {title}
               </h2>
            </div>
         </div>

         <VisitorsToVenturesSlider testimonial={testimonial} />
      </section>
   );
}

export default VisitorsToVentures;
