import getGqlData from '@/lib/get-gql-data';
import {
   seoCareerDataQuery,
   seoDataQuery,
   seoInsightDataQuery,
   seoProjectDataQuery,
} from '../queries/seo-data-query';

export const getSeoData = async (uri) => {
   try {
      const response = await getGqlData(seoDataQuery, { uri });

      if (!response?.pageBy) {
         console.warn(`No SEO data found for URI: ${uri}`);
         return null;
      }

      const page = response.pageBy;

      return {
         id: page.id,
         seo: page.seo || {},
         featuredImage: page.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching SEO data:', error);
      return null;
   }
};

export const getSeoProjectData = async (slug) => {
   try {
      const response = await getGqlData(seoProjectDataQuery, { slug });

      if (!response?.projectBy) {
         console.warn(`No project SEO data found for slug: ${slug}`);
         return null;
      }

      const project = response.projectBy;

      return {
         id: project.id,
         seo: project.seo || {},
         featuredImage: project.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching project SEO data:', error);
      return null;
   }
};

export const getSeoCareerData = async (slug) => {
   try {
      const response = await getGqlData(seoCareerDataQuery, { slug });

      if (!response?.careerBy) {
         console.warn(`No career SEO data found for slug: ${slug}`);
         return null;
      }

      const career = response.careerBy;

      return {
         id: career.id,
         seo: career.seo || {},
         featuredImage: career.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching career SEO data:', error);
      return null;
   }
};

export const getSeoInsightData = async (slug) => {
   try {
      const response = await getGqlData(seoInsightDataQuery, { slug });

      if (!response?.postBy) {
         console.warn(`No insight SEO data found for slug: ${slug}`);
         return null;
      }

      const post = response.postBy;

      return {
         id: post.id,
         seo: post.seo || {},
         featuredImage: post.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching insight SEO data:', error);
      return null;
   }
};
