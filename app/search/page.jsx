'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Location from '@/components/icons/location';
import Link from 'next/link';
import Search from '@/components/icons/search';
import ArrowLeft from '@/components/icons/arrow-left';
import ArrowRight from '@/components/icons/arrow-right';

const projects = [
   {
      id: 1,
      title: 'Keraniganj Green Towers',
      categories: ['Real Estate', 'Apartment'],
      location: 'Keraniganj, Dhaka',
   },
   {
      id: 2,
      title: 'Banani Lake View',
      categories: ['Real Estate', 'Luxury'],
      location: 'Banani, Dhaka',
   },
   {
      id: 3,
      title: 'Chattogram Residency',
      categories: ['Apartment', 'Modern'],
      location: 'Chattogram',
   },
   {
      id: 4,
      title: 'Gulshan Heights',
      categories: ['Luxury', 'Apartment'],
      location: 'Gulshan, Dhaka',
   },
   {
      id: 5,
      title: 'Uttara Modern Complex',
      categories: ['Real Estate'],
      location: 'Uttara, Dhaka',
   },
   {
      id: 6,
      title: 'Sylhet Garden',
      categories: ['Apartment'],
      location: 'Sylhet',
   },
];

const itemsPerPage = 2;

const ProjectResult = ({ project }) => {
   return (
      <article className="search-result project-result">
         <div className="result-content">
            <span className="category">
               {project.categories.map((cat, index) => (
                  <Link key={index} href="/">
                     {cat}
                  </Link>
               ))}
            </span>
            <h2>
               <Link href="/">{project.title}</Link>
            </h2>
            <div className="project-location">
               <Location />
               <span className="text-uppercase body-two-caps">
                  {project.location}
               </span>
            </div>
         </div>
      </article>
   );
};

export default function SearchPage() {
   const { register, handleSubmit } = useForm();
   const [results, setResults] = useState(projects);
   const [currentPage, setCurrentPage] = useState(1);

   const totalPages = Math.ceil(results.length / itemsPerPage);

   const onSubmit = (data) => {
      const searchTerm = data.search?.toLowerCase() || '';
      const filtered = projects.filter(
         (p) =>
            p.title.toLowerCase().includes(searchTerm) ||
            p.categories.some((c) => c.toLowerCase().includes(searchTerm)) ||
            p.location.toLowerCase().includes(searchTerm)
      );
      setResults(filtered);
      setCurrentPage(1);
   };

   const paginatedResults = results.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
   );

   const handlePageClick = (e, page) => {
      e.preventDefault();
      if (page >= 1 && page <= totalPages) {
         setCurrentPage(page);
      }
   };

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
                  paginatedResults.map((project) => (
                     <ProjectResult key={project.id} project={project} />
                  ))
               ) : (
                  <p className="heading-h5 font-primary">No results found</p>
               )}
            </div>

            {/* Pagination */}
            {results.length > 0 && (
               <div className="search-pagination">
                  <nav className="navigation pagination">
                     <div className="nav-links projects-pagination">
                        {currentPage > 1 && (
                           <button
                              type="button"
                              className="prev page-numbers"
                              onClick={(e) =>
                                 handlePageClick(e, currentPage - 1)
                              }
                           >
                              <ArrowLeft />
                           </button>
                        )}

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
                                 type="button"
                                 key={page}
                                 className="page-numbers"
                                 onClick={(e) => handlePageClick(e, page)}
                              >
                                 {page}
                              </button>
                           )
                        )}

                        {currentPage < totalPages && (
                           <button
                              type="button"
                              className="next page-numbers"
                              onClick={(e) =>
                                 handlePageClick(e, currentPage + 1)
                              }
                           >
                              <ArrowRight />
                           </button>
                        )}
                     </div>
                  </nav>
               </div>
            )}
         </div>
      </section>
   );
}
