import getGqlData from '@/lib/get-gql-data';
import { multiProjectQuery } from '../queries/project-data-query';

export const getProjectData = async (ids) => {
   if (!Array.isArray(ids) || ids.length === 0) {
      console.warn('No IDs provided for project fetch');
      return [];
   }

   try {
      const projectData = await getGqlData(multiProjectQuery, { ids });

      if (!projectData?.projects?.nodes?.length) {
         console.warn(`No projects found for IDs: ${ids.join(', ')}`);
         return [];
      }

      return projectData.projects.nodes;
   } catch (error) {
      console.error('Error fetching project data:', error);
      return [];
   }
};
