import { gql } from '@apollo/client';

export const multiInsightQuery = gql`
   query MultiInsightQuery($ids: [ID!]!) {
      posts(where: { in: $ids }) {
         nodes {
            id
            title
            featuredImage {
               node {
                  link
               }
            }
            slug
            date
         }
      }
   }
`;

export const allInsightsQuery = gql`
   query AllInsightsQuery($limit: Int = 10) {
      posts(first: $limit) {
         edges {
            node {
               id
               title
               featuredImage {
                  node {
                     link
                  }
               }
               slug
               date
               excerpt
            }
         }
      }
   }
`;

export const singleInsightQuery = gql`
   query singleInsight($slug: String!) {
      postBy(slug: $slug) {
         id
         title
         featuredImage {
            node {
               link
            }
         }
         slug
         date
         content
      }
   }
`;
