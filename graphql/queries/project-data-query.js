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

export const projectBySlugQuery = gql`
   query ProjectBySlugQuery($slug: String!) {
      projectBy(slug: $slug) {
         id
         slug
         title
         projectLocation
         projectCategories {
            edges {
               node {
                  id
                  name
               }
            }
         }
         projectStatus
         projectStatusColor
         projectType
         sliderLibrary {
            id
            link
         }
         brochureFile
         overview
         projectDetailsCards {
            image
            title
            top_title
         }
         amenities
         youtubeVideo
         googleMapIframe
      }
   }
`;

export const projectsWithLimitQuery = gql`
   query ProjectsQuery($limit: Int!) {
      projects(first: $limit) {
         nodes {
            id
            featuredImage {
               node {
                  mediaItemUrl
               }
            }
            projectLocation
            title
            slug
            projectStatus
            projectType
            projectStatusColor
         }
      }
   }
`;

export const projectsWithPaginationQuery = gql`
   query ProjectsQuery(
      $limit: Int!
      $after: String
      $location: String
      $search: String
   ) {
      projects(
         first: $limit
         after: $after
         where: { projectLocation: $location, search: $search }
      ) {
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
         pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
         }
      }
   }
`;
