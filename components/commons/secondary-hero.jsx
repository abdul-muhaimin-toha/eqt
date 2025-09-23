function SecondaryHero({ data }) {
   const title = data?.data?.title || '';

   return (
      <section className="project-filter-top-title">
         <h2 className="large-h1 text-center">{title}</h2>
      </section>
   );
}

export default SecondaryHero;
