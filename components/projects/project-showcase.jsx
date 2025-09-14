'use client';

import { useForm } from 'react-hook-form';
import Search from '../icons/search';
import PointerDown from '../icons/pointer-down';
import { useEffect, useState } from 'react';
import ArrowRight from '../icons/arrow-right';
import ArrowLeft from '../icons/arrow-left';
import { ProjectCard } from '../home-page/popular-deals';

const projects = [
   {
      id: 1,
      title: 'Keraniganj Green Towers',
      category: 'Apartment',
      location: 'Keraniganj, Dhaka',
      status: 'Ongoing',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/projects/1',
   },
   {
      id: 2,
      title: 'Commercial Tech Park',
      category: 'Land',
      location: 'Bashundhara, Dhaka',
      status: 'Ongoing',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/projects/1',
   },
   {
      id: 3,
      title: 'Keraniganj Green Towers',
      category: 'Apartment',
      location: 'Keraniganj, Dhaka',
      status: 'Ongoing',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/projects/1',
   },
   {
      id: 4,
      title: 'Commercial Tech Park',
      category: 'Apartment',
      location: 'Bashundhara, Dhaka',
      status: 'Ongoing',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/projects/1',
   },
   {
      id: 5,
      title: 'Commercial Tech Park',
      category: 'Apartment',
      location: 'Bashundhara, Dhaka',
      status: 'Ongoing',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/projects/1',
   },
   {
      id: 6,
      title: 'Commercial Tech Park',
      category: 'Apartment',
      location: 'Bashundhara, Dhaka',
      status: 'Ongoing',
      image: 'https://staging.hellonotionhive.com/wordpress/eqt/wp-content/uploads/2025/07/Rectangle.webp',
      link: '/projects/1',
   },
];

const categories = [
   {
      id: 1,
      name: 'Real Estate',
      children: [
         { id: 1, name: 'Apartment' },
         { id: 2, name: 'Land' },
      ],
   },
   {
      id: 2,
      name: 'Consultation',
      children: [],
   },
   {
      id: 3,
      name: 'Project Type',
      children: [
         { id: 1, name: 'Ongoing' },
         { id: 2, name: 'Upcoming' },
         { id: 3, name: 'Completed' },
      ],
   },
];

const PAGE_SIZE = 6;

function ProjectShowcase() {
   const { register, watch, reset, setValue } = useForm({
      defaultValues: {
         search: '',
         location: '',
         categories: [],
      },
   });

   const [currentPage, setCurrentPage] = useState(1);
   const filters = watch();
   const selected = filters.categories;

   useEffect(() => {
      setCurrentPage(1);
   }, [filters]);

   // ---- Parent-Child Checkbox Sync ----
   const handleParentToggle = (parent, children) => {
      const parentSelected = selected.includes(parent);
      if (parentSelected) {
         setValue(
            'categories',
            selected.filter((c) => c !== parent && !children.includes(c))
         );
      } else {
         setValue('categories', [
            ...new Set([...selected, parent, ...children]),
         ]);
      }
   };

   const handleChildToggle = (child, parent, siblings) => {
      if (selected.includes(child)) {
         const updated = selected.filter((c) => c !== child && c !== parent);
         setValue('categories', updated);
      } else {
         const updated = [...selected, child];
         const allSiblings = siblings.every((s) => updated.includes(s));
         if (allSiblings) updated.push(parent);
         setValue('categories', [...new Set(updated)]);
      }
   };

   // ---- Filtering ----
   const filteredProjects = projects.filter((p) => {
      const matchSearch = filters.search
         ? p.title.toLowerCase().includes(filters.search.toLowerCase())
         : true;
      const matchLocation = filters.location
         ? p.location === filters.location
         : true;
      const matchCategory =
         filters.categories.length > 0
            ? filters.categories.includes(p.category) ||
              filters.categories.includes(p.status)
            : true;
      return matchSearch && matchLocation && matchCategory;
   });

   const totalPages = Math.ceil(filteredProjects.length / PAGE_SIZE);
   const paginatedProjects = filteredProjects.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
   );

   const handlePageChange = (page) => setCurrentPage(page);

   return (
      <div className="container">
         <SearchBar register={register} filteredProjects={filteredProjects} />
         <div className="projects-filter-wrapper">
            <Sidebar
               register={register}
               reset={reset}
               selected={selected}
               handleParentToggle={handleParentToggle}
               handleChildToggle={handleChildToggle}
               filters={filters}
            />
            <Projects
               paginatedProjects={paginatedProjects}
               currentPage={currentPage}
               totalPages={totalPages}
               handlePageChange={handlePageChange}
            />
         </div>
      </div>
   );
}

function SearchBar({ register, filteredProjects }) {
   return (
      <div className="project-filter-search-option">
         <div className="project-filter-search-counter">
            <h4 className="heading-h4">Browse All Products</h4>
            <span className="project-total-count inter-body-one color-two">
               {filteredProjects.length} Items
            </span>
         </div>
         <div className="project-search">
            <input
               type="text"
               id="project-search"
               placeholder="Search"
               {...register('search')}
            />
            <Search />
         </div>
      </div>
   );
}

function Sidebar({
   register,
   reset,
   selected,
   handleParentToggle,
   handleChildToggle,
   filters,
}) {
   return (
      <aside className="projects-filter-sidebar">
         <div className="project-filter-sidebar-inner">
            <div className="projects-filter-sidebar-clear">
               <h3 className="lead-text-one">Filter by</h3>
               <button
                  id="reset-filters"
                  className="button"
                  onClick={() => reset()}
                  type="button"
               >
                  Clear filter
               </button>
            </div>
            {/* Locations */}
            <div className="filter-group">
               <div className="filter-group-title inter-body-one">
                  Locations
               </div>
               <div className="footer-location-list">
                  <select
                     id="filter-location"
                     {...register('location')}
                     value={filters.location || ''}
                     className="bg-white"
                  >
                     <option value="">All Locations</option>
                     <option value="Keraniganj, Dhaka">
                        Keraniganj, Dhaka
                     </option>
                     <option value="Bashundhara, Dhaka">
                        Bashundhara, Dhaka
                     </option>
                     <option value="Mohakhali , Dhaka">
                        Mohakhali , Dhaka
                     </option>
                  </select>
                  <PointerDown className="custom-select-arrow" />
               </div>
            </div>
            {/* Project Categories */}
            <div className="filter-group">
               <div className="filter-group-title inter-body-one">
                  Categories
               </div>
               {categories.map((category) => {
                  const parentChecked =
                     selected?.includes(category.name) || false;
                  const childNames = category.children.map((c) => c.name);
                  return (
                     <div className="category-group" key={category.id}>
                        <div className="parent-category">
                           <label>
                              <input
                                 type="checkbox"
                                 className="filter-category"
                                 checked={parentChecked}
                                 onChange={() =>
                                    handleParentToggle(
                                       category.name,
                                       childNames
                                    )
                                 }
                              />
                              {category.name}
                           </label>
                        </div>
                        {category.children?.length > 0 && (
                           <div className="child-categories">
                              {category.children.map((child) => (
                                 <div className="child-category" key={child.id}>
                                    <label>
                                       <input
                                          type="checkbox"
                                          className="filter-category"
                                          checked={
                                             selected?.includes(child.name) ||
                                             false
                                          }
                                          onChange={() =>
                                             handleChildToggle(
                                                child.name,
                                                category.name,
                                                childNames
                                             )
                                          }
                                       />
                                       {child.name}
                                    </label>
                                 </div>
                              ))}
                           </div>
                        )}
                     </div>
                  );
               })}
            </div>
         </div>
      </aside>
   );
}

function Projects({
   paginatedProjects,
   currentPage,
   totalPages,
   handlePageChange,
}) {
   return (
      <main className="projects-results">
         <div id="projects-container">
            {paginatedProjects.length === 0 ? (
               <p>No projects found.</p>
            ) : (
               paginatedProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
               ))
            )}
            <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               handlePageChange={handlePageChange}
            />
         </div>
      </main>
   );
}

function Pagination({ currentPage, totalPages, handlePageChange }) {
   return (
      <div className="projects-pagination">
         {currentPage > 1 && (
            <button
               className="prev page-numbers"
               onClick={() => handlePageChange(currentPage - 1)}
            >
               <ArrowLeft />
            </button>
         )}
         {currentPage > 1 &&
            Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
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
                     className="page-numbers"
                     onClick={() => handlePageChange(page)}
                  >
                     {page}
                  </button>
               )
            )}
         {currentPage < totalPages && (
            <button
               className="next page-numbers"
               onClick={() => handlePageChange(currentPage + 1)}
            >
               <ArrowRight />
            </button>
         )}
      </div>
   );
}

export default ProjectShowcase;
