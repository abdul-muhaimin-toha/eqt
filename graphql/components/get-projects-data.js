import getGqlData from '@/lib/get-gql-data';
import {
   multiProjectQuery,
   projectBySlugQuery,
   projectsWithLimitQuery,
   projectsWithPaginationQuery,
} from '../queries/project-data-query';

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

export const getProjectBySlug = async (slug) => {
   if (!slug) {
      console.warn('No slug provided for project fetch');
      return null;
   }

   try {
      const projectData = await getGqlData(projectBySlugQuery, { slug });

      if (!projectData?.projectBy) {
         console.warn(`No project found for slug: ${slug}`);
         return null;
      }

      return projectData.projectBy;
   } catch (error) {
      console.error('Error fetching project by slug:', error);
      return null;
   }
};

export const getProjectsWithLimit = async (limit = 5) => {
   try {
      const projectData = await getGqlData(projectsWithLimitQuery, { limit });

      if (!projectData?.projects?.nodes?.length) {
         console.warn(`No projects found with limit: ${limit}`);
         return [];
      }

      return projectData.projects.nodes;
   } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
   }
};

export const getProjectsWithPagination = async ({
   limit = 5,
   after = null,
   location = null,
   search = null,
} = {}) => {
   try {
      const variables = {
         limit,
         after,

         location,
         search,
      };

      const data = await getGqlData(projectsWithPaginationQuery, variables);

      if (!data?.projects?.nodes?.length) {
         console.warn('No projects found with variables:', variables);
         return { projects: [], pageInfo: null };
      }

      return {
         projects: data.projects.nodes, // nodes is already array
         pageInfo: data.projects.pageInfo,
      };
   } catch (error) {
      console.error('Error fetching projects with pagination:', error);
      return { projects: [], pageInfo: null };
   }
};
