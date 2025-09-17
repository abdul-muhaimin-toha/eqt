import ApolloClientLib from './apollo-client-lib';

const getGqlData = async (query, variables = {}, retries = 3) => {
   try {
      const { data } = await ApolloClientLib.query({
         query,
         variables,
         fetchPolicy: 'network-only',
         context: {
            fetchOptions: {
               next: {
                  tags: ['cms'],
                  revalidate: 10,
               },
            },
         },
      });

      return data;
   } catch (error) {
      if (retries > 0) {
         return getGqlData(query, variables, retries - 1);
      } else {
         console.error('GraphQL request failed:', error);
         return null;
      }
   }
};

export default getGqlData;
