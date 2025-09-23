import SearchInner from '@/components/search/search-inner';

export default async function SearchPage({ searchParams }) {
   const { searchTerm } = await searchParams;

   // Only await fetch, not searchParams
   const res = await fetch(
      `https://staging.hellonotionhive.com/wordpress/eqt/wp-json/nh/v1/search?q=${encodeURIComponent(
         searchTerm
      )}`,
      {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      }
   );

   const data = await res.json();

   return <SearchInner data={data} searchTerm={searchTerm} />;
}
