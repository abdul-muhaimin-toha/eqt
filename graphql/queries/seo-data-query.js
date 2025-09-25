import { gql } from '@apollo/client';

export const seoDataQuery = gql`
   query SeoDataQuery($uri: String!) {
      pageBy(uri: $uri) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;

export const seoProjectDataQuery = gql`
   query SeoProjectDataQuery($slug: String!) {
      projectBy(slug: $slug) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;

export const seoCareerDataQuery = gql`
   query SeoCareerDataQuery($slug: String!) {
      careerBy(slug: $slug) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;

export const seoInsightDataQuery = gql`
   query SeoInsightQuery($slug: String!) {
      postBy(slug: $slug) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;
