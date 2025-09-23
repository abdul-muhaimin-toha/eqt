import { gql } from '@apollo/client';

export const headerQuery = gql`
   query GetMenu($id: ID!) {
      menu(id: $id) {
         menuItems(first: 20) {
            nodes {
               title
               url
               label
               childItems {
                  nodes {
                     label
                     url
                     childItems {
                        nodes {
                           label
                           url
                           parentId
                        }
                     }
                     parentId
                  }
               }
               parentId
            }
         }
      }
      crbThemeOptions {
         companyLogo
         joinNow
         facebookLink
         footerAddress
         footerCompanyLogo
         footerEmailAddress
         footerPhoneAddress
         linkedinLink
         xLink
         popularSearchSuggestion {
            title
         }
      }
   }
`;

export const footerQuery = gql`
   query GetMenus($firstId: ID!, $secondId: ID!, $thirdId: ID!) {
      firstMenu: menu(id: $firstId) {
         id
         name
         menuItems {
            edges {
               node {
                  url
                  label
               }
            }
         }
      }
      secondMenu: menu(id: $secondId) {
         id
         name
         menuItems {
            edges {
               node {
                  url
                  label
               }
            }
         }
      }
      thirdMenu: menu(id: $thirdId) {
         id
         name
         menuItems {
            edges {
               node {
                  url
                  label
               }
            }
         }
      }
      crbThemeOptions {
         facebookLink
         footerAddress
         footerCompanyLogo
         footerEmailAddress
         footerPhoneAddress
         linkedinLink
         xLink
         popularSearchSuggestion {
            title
         }
      }
   }
`;
