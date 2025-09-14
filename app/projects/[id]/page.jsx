import PopularDeals from '@/components/home-page/popular-deals';
import ProjectDetailsLeft from '@/components/projects/project-details-left';
import ProjectDetailsRight from '@/components/projects/project-details-right';

export default function ProjectDetailsPage() {
   return (
      <section className="single-product-wrapper bg-white">
         <div className="single-product-list">
            <ProjectDetailsLeft />
            <ProjectDetailsRight />
            <div className="container">
               <PopularDeals variant="project-page" />
            </div>
         </div>
      </section>
   );
}
