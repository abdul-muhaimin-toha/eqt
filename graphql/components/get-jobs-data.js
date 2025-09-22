import getGqlData from '@/lib/get-gql-data';
import {
   paginatedCareersQuery,
   singleCareerQuery,
} from '../queries/jobs-data-query';

export const getPaginatedCareersData = async () => {
   try {
      const data = await getGqlData(paginatedCareersQuery);

      if (!data?.careers?.edges?.length) {
         console.warn('No careers found');
         return { careers: [] };
      }

      const careers = data.careers.edges.map(({ node }) => node);

      return { careers };
   } catch (error) {
      console.error('Error fetching careers data:', error);
      return { careers: [] };
   }
};

export const getCareerBySlug = async (slug) => {
   try {
      if (!slug) {
         console.warn('No slug provided');
         return null;
      }

      const data = await getGqlData(singleCareerQuery, { slug });

      if (!data?.careerBy) {
         console.warn(`Career not found for slug: ${slug}`);
         return null;
      }

      return data.careerBy;
   } catch (error) {
      console.error('Error fetching career by slug:', error);
      return null;
   }
};
