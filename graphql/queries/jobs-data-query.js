import { gql } from '@apollo/client';

export const paginatedCareersQuery = gql`
   query PaginatedCareersQuery {
      careers(first: 100) {
         edges {
            node {
               id
               title
               slug
               careerJobLocation
               careerJobDeadline
               careerVacancies
            }
         }
      }
   }
`;

export const singleCareerQuery = gql`
   query SingleCareer($slug: String!) {
      careerBy(slug: $slug) {
         id
         title
         careerJobDeadline
         careerJobLocation
         careerVacancies
         slug
         content
      }
   }
`;
