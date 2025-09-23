'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Search from '../icons/search';
import ArrowLeft from '../icons/arrow-left';
import ArrowRight from '../icons/arrow-right';
import Location from '../icons/location';

const itemsPerPage = 5;

const ProjectResult = ({ project }) => (
   <Link
      href={
         project.type === 'post'
            ? `/insight/${project.slug}`
            : `/projects/${project.slug}`
      }
   >
      <article className="search-result project-result">
         <div className="result-content">
            <span className="category">
               {project.category.map((cat, idx) => (
                  <p key={idx}>{cat}</p>
               ))}
            </span>
            <h2>
               <p>{project.title}</p>
            </h2>
            {project.location && (
               <div className="project-location">
                  <Location />
                  <span className="text-uppercase body-two-caps">
                     {project.location}
                  </span>
               </div>
            )}
         </div>
      </article>
   </Link>
);

export default function SearchInner({ data, searchTerm }) {
   const router = useRouter();

   const { register, handleSubmit } = useForm({
      defaultValues: { search: searchTerm || '' },
   });

   const [currentPage, setCurrentPage] = useState(1);
   const results = data?.results || [];
   const totalPages = Math.ceil(results.length / itemsPerPage);

   const onSubmit = ({ search }) => {
      const term = (search || '').toLowerCase().trim();
      if (!term) return;
      setCurrentPage(1);
      router.push(`/search?searchTerm=${encodeURIComponent(term)}`);
   };

   const paginatedResults = results.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
   );

   return (
      <section className="search-results-wrapper bg-white">
         <div className="container">
            <form
               className="search-heading bg-white"
               onSubmit={handleSubmit(onSubmit)}
            >
               <input
                  type="search"
                  className="search-input bg-white"
                  {...register('search')}
                  id="search-input"
               />
               <button type="submit" className="search-button">
                  <Search />
               </button>
            </form>

            <div className="search-results-header">
               <span className="heading-h4 font-primary">Browse All </span>
               <span className="inter-body-one color-two">
                  {results.length} Items
               </span>
            </div>

            <div className="search-results-container">
               {paginatedResults.length > 0 ? (
                  paginatedResults.map((project, idx) => (
                     <ProjectResult key={idx} project={project} />
                  ))
               ) : (
                  <p className="heading-h5 font-primary">No results found</p>
               )}
            </div>

            {results.length > 0 && totalPages > 1 && (
               <div className="search-pagination">
                  <nav className="navigation pagination">
                     <div className="nav-links projects-pagination">
                        <button
                           disabled={currentPage <= 1}
                           type="button"
                           className="prev page-numbers cursor-pointer"
                           onClick={() => setCurrentPage(currentPage - 1)}
                        >
                           <ArrowLeft />
                        </button>

                        {Array.from(
                           { length: totalPages },
                           (_, i) => i + 1
                        ).map((page) =>
                           page === currentPage ? (
                              <span
                                 key={page}
                                 aria-current="page"
                                 className="page-numbers current"
                              >
                                 {page}
                              </span>
                           ) : (
                              <button
                                 key={page}
                                 type="button"
                                 className="page-numbers cursor-pointer"
                                 onClick={() => setCurrentPage(page)}
                              >
                                 {page}
                              </button>
                           )
                        )}

                        <button
                           disabled={currentPage >= totalPages}
                           type="button"
                           className="next page-numbers cursor-pointer"
                           onClick={() => setCurrentPage(currentPage + 1)}
                        >
                           <ArrowRight />
                        </button>
                     </div>
                  </nav>
               </div>
            )}
         </div>
      </section>
   );
}
