import ProjectShowcase from '@/components/projects/project-showcase';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { getPageData } from '@/graphql/components/get-page-data';

export default async function ProjectsPage() {
   const projectsPageData = await getPageData('projects');

   return (
      <div className="bg-white">
         <RenderBlocksHelper blocks={projectsPageData} />
         <ProjectShowcase />
      </div>
   );
}
