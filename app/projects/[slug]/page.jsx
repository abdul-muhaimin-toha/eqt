import PopularDeals from '@/components/home-page/popular-deals';
import ProjectDetailsLeft from '@/components/projects/project-details-left';
import ProjectDetailsRight from '@/components/projects/project-details-right';
import {
   getProjectBySlug,
   getProjectsWithLimit,
} from '@/graphql/components/get-projects-data';
import { formatProjectSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata({ params }) {
   const seo = await formatProjectSeoMeta(params.slug);

   console.log(seo);
   return seo;
}

export default async function ProjectDetailsPage({ params }) {
   const { slug } = await params;
   const project = await getProjectBySlug(slug);
   const projects = await getProjectsWithLimit(5);
   const { sliderLibrary, brochureFile } = project;

   return (
      <section className="single-product-wrapper bg-white">
         <div className="single-product-list">
            <ProjectDetailsLeft
               sliders={sliderLibrary}
               brochureFile={brochureFile}
            />
            <ProjectDetailsRight project={project} />
            {projects?.length > 0 && (
               <div className="container">
                  <PopularDeals
                     data={{
                        data: {
                           btn_text: 'View All',
                           btn_url: '/projects',
                           open_in_new_tab: false,
                           title: 'Popular Deals in Town',
                        },
                     }}
                     projects={projects}
                     variant="project-page"
                  />
               </div>
            )}
         </div>
      </section>
   );
}
