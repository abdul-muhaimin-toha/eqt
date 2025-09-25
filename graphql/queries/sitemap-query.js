import { gql } from '@apollo/client';

export const sitemapQuery = gql`
   query SitemapQuery {
      pages(first: 1000) {
         edges {
            node {
               uri
               modified
            }
         }
      }
      posts(first: 1000) {
         edges {
            node {
               slug
               modified
            }
         }
      }
      projects(first: 1000) {
         edges {
            node {
               slug
               modified
            }
         }
      }
      careers(first: 1000) {
         edges {
            node {
               slug
               modified
            }
         }
      }
   }
`;
