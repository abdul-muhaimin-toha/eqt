import getGqlData from '@/lib/get-gql-data';
import { pageDataQuery } from '../queries/page-data-query';

export const getPageData = async (uri) => {
   try {
      const pageData = await getGqlData(pageDataQuery, { uri });

      if (!pageData?.pageBy) {
         console.warn(`No data found for URI: ${uri}`);
         return [];
      }

      return pageData.pageBy.blocks || [];
   } catch (error) {
      console.error('Error fetching page data:', error);
      return [];
   }
};
