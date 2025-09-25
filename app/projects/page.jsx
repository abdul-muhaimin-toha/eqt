import ProjectShowcase from '@/components/projects/project-showcase';
import RenderBlocksHelper from '@/utils/render-blocks-helper';
import { getPageData } from '@/graphql/components/get-page-data';
import { getProjectsWithLimit } from '@/graphql/components/get-projects-data';
import { getProjectCategories } from '@/graphql/components/get-project-category-data';
import { transformCategories } from '@/utils/utility';
import { Suspense } from 'react';
import { formatSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata() {
   const seo = await formatSeoMeta('projects');

   console.log(seo);

   return seo;
}

export default async function ProjectsPage() {
   const projectsPageData = await getPageData('projects');
   const projects = await getProjectsWithLimit(200);
   const flatCategories = await getProjectCategories();
   const categories = transformCategories(flatCategories);

   return (
      <div className="bg-white">
         <RenderBlocksHelper blocks={projectsPageData} />
         <Suspense>
            <ProjectShowcase projects={projects} categories={categories} />
         </Suspense>
      </div>
   );
}
