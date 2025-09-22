import { gql } from '@apollo/client';

export const multiProjectQuery = gql`
   query MultiProjectQuery($ids: [ID!]!) {
      projects(where: { in: $ids }) {
         nodes {
            id
            featuredImage {
               node {
                  mediaItemUrl
               }
            }
            projectLocation
            title
            projectShortDes
            featureProjects {
               image
               title
            }
            slug
            projectCategories {
               edges {
                  node {
                     name
                  }
               }
            }
            projectStatus
            projectType
            projectStatusColor
         }
      }
   }
`;
