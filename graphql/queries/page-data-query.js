import { gql } from '@apollo/client';

export const pageDataQuery = gql`
   query PageDataQuery($uri: String!) {
      pageBy(uri: $uri) {
         id
         blocks {
            attributesJSON
            dynamicContent
            originalContent
            saveContent
            name
            order
         }
      }
   }
`;
