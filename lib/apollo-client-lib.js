import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const ApolloClientLib = new ApolloClient({
   link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_SITES_API,
      fetchOptions: {
         timeout: 90000, // optional
      },
   }),
   cache: new InMemoryCache(),
   defaultOptions: {
      query: {
         fetchPolicy: 'no-cache',
         errorPolicy: 'all',
      },
   },
});

export default ApolloClientLib;
