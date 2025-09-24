import { gql } from '@apollo/client';

export const projectCategoriesQuery = gql`
   query ProjectCategoriesQuery {
      projectCategories {
         edges {
            node {
               id
               parentId
               name
               projectCategoryId
            }
         }
      }
   }
`;
