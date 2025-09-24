'use client';

import { useForm } from 'react-hook-form';
import Search from '../icons/search';
import PointerDown from '../icons/pointer-down';
import { useEffect, useState } from 'react';
import ArrowRight from '../icons/arrow-right';
import ArrowLeft from '../icons/arrow-left';
import { ProjectCard } from '../home-page/popular-deals';
import { useSearchParams } from 'next/navigation';
import HamburgerClose from '../icons/hamburger-close';
import Settings from '../icons/settings';

const PAGE_SIZE = 6;

function ProjectShowcase({ projects, categories }) {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const searchParams = useSearchParams();

   const { register, watch, reset, setValue } = useForm({
      defaultValues: {
         search: '',
         location: '',
         categories: [],
      },
   });

   const [currentPage, setCurrentPage] = useState(1);

   const search = watch('search')?.trim();
   const location = watch('location');
   const selected = watch('categories');

   // --- Initialize categories from search params ---
   useEffect(() => {
      const categoriesParam = searchParams.get('categories'); // original from URL
      if (categoriesParam) {
         // Convert URL params to lowercase
         const selectedFromParams = categoriesParam
            .split(',')
            .map((c) => decodeURIComponent(c.trim().toLowerCase()));

         const finalSelected = new Set();

         categories.forEach((cat) => {
            const parentNameLower = cat.name.toLowerCase();
            const childNamesLower =
               cat.children?.map((c) => c.name.toLowerCase()) || [];

            // If parent matches URL param, add parent and all children
            if (selectedFromParams.includes(parentNameLower)) {
               finalSelected.add(cat.name);
               cat.children?.forEach((child) => finalSelected.add(child.name));
            }

            // If any children match URL param, add child
            cat.children?.forEach((child) => {
               if (selectedFromParams.includes(child.name.toLowerCase())) {
                  finalSelected.add(child.name);
               }
            });

            // If all children are selected, ensure parent is also selected
            const allChildrenSelected = childNamesLower.every((cNameLower) =>
               selectedFromParams.includes(cNameLower)
            );
            if (allChildrenSelected && cat.children?.length > 0) {
               finalSelected.add(cat.name);
            }
         });

         setValue('categories', Array.from(finalSelected));
      }
   }, [searchParams, categories, setValue]);

   // Reset page whenever filters change
   useEffect(() => {
      setCurrentPage(1);
   }, [search, location, selected]);

   useEffect(() => {
      if (isMobileMenuOpen) {
         document.body.style.overflow = 'hidden';
         document.body.style.position = 'fixed';
         document.body.style.width = '100%';
      } else {
         document.body.style.overflow = '';
         document.body.style.position = '';
         document.body.style.width = '';
      }

      return () => {
         document.body.style.overflow = '';
         document.body.style.position = '';
         document.body.style.width = '';
      };
   }, [isMobileMenuOpen]);

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
      let updated;
      if (selected.includes(child)) {
         updated = selected.filter((c) => c !== child);
         if (selected.includes(parent)) {
            updated = updated.filter((c) => c !== parent);
         }
      } else {
         updated = [...selected, child];
         const allSiblingsSelected = siblings.every((s) => updated.includes(s));
         if (allSiblingsSelected) updated.push(parent);
      }
      setValue('categories', [...new Set(updated)]);
   };

   const filteredProjects = projects.filter((p) => {
      const matchSearch = search
         ? p.title.toLowerCase().includes(search.toLowerCase())
         : true;
      const matchLocation = location ? p.projectLocation === location : true;
      const matchCategory =
         selected.length > 0
            ? selected.includes(p.projectType) ||
              selected.includes(p.projectStatus)
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
         <SearchBar
            register={register}
            projects={projects}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
         />
         <div className="projects-filter-wrapper">
            <Sidebar
               register={register}
               reset={reset}
               selected={selected}
               handleParentToggle={handleParentToggle}
               handleChildToggle={handleChildToggle}
               categories={categories}
            />
            <Projects
               paginatedProjects={paginatedProjects}
               currentPage={currentPage}
               totalPages={totalPages}
               handlePageChange={handlePageChange}
            />
            {isMobileMenuOpen && (
               <MobileFilter
                  register={register}
                  reset={reset}
                  selected={selected}
                  handleParentToggle={handleParentToggle}
                  handleChildToggle={handleChildToggle}
                  categories={categories}
                  setIsMobileMenuOpen={setIsMobileMenuOpen}
               />
            )}
         </div>
      </div>
   );
}

function SearchBar({ register, projects, setIsMobileMenuOpen }) {
   return (
      <div className="project-filter-search-option">
         <div className="project-filter-search-counter">
            <h4 className="heading-h4">Browse All Products</h4>
            <span className="project-total-count inter-body-one color-two">
               {projects.length} Items
            </span>
         </div>
         <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center">
            <button
               onClick={() => setIsMobileMenuOpen(true)}
               className="project-setting lg:hidden !w-full !text-left !px-3"
            >
               Filter
               <Settings className="!right-[12px]" />
            </button>
            <div className="project-search !w-full">
               <input
                  type="text"
                  id="project-search"
                  placeholder="Search"
                  {...register('search')}
               />
               <Search />
            </div>
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
   categories,
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
                     {...register('location')}
                     id="filter-location"
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

            {/* Categories */}
            <div className="filter-group">
               <div className="filter-group-title inter-body-one">
                  Categories
               </div>
               {categories.map((category) => {
                  const parentChecked = selected.includes(category.name);
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
                                          checked={selected.includes(
                                             child.name
                                          )}
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
         <div id="projects-container" className="h-full">
            {paginatedProjects.length === 0 ? (
               <div className="flex flex-col items-center justify-center w-full h-full">
                  <p className="text-center text-base">No projects found.</p>
               </div>
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
               className="page-numbers cursor-pointer"
               onClick={() => handlePageChange(currentPage - 1)}
            >
               <ArrowLeft />
            </button>
         )}
         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) =>
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
                  className="page-numbers cursor-pointer"
                  onClick={() => handlePageChange(page)}
               >
                  {page}
               </button>
            )
         )}
         {currentPage < totalPages && (
            <button
               className="page-numbers cursor-pointer"
               onClick={() => handlePageChange(currentPage + 1)}
            >
               <ArrowRight />
            </button>
         )}
      </div>
   );
}

function MobileFilter({
   register,
   selected,
   reset,
   handleParentToggle,
   handleChildToggle,
   categories,
   setIsMobileMenuOpen,
}) {
   const [expanded, setExpanded] = useState({});

   const toggleAccordion = (categoryId) => {
      setExpanded((prev) => ({
         ...prev,
         [categoryId]: !prev[categoryId],
      }));
   };

   const handleClear = () => {
      reset();
   };

   const handleApply = () => {
      setIsMobileMenuOpen(false);
   };

   return (
      <aside className="projects-filter-sidebar !bg-red-500 max-h-[90dvh] overflow-y-auto fixed bottom-0 left-0 right-0 !block z-[9999] !shadow-2xl shadow-gray-500">
         <div className="project-filter-sidebar-inner !bg-white ">
            <div className="projects-filter-sidebar-clear flex justify-between items-center">
               <h3 className="lead-text-one">Filter by</h3>
               <button
                  className="close-search"
                  onClick={() => setIsMobileMenuOpen(false)}
               >
                  <HamburgerClose />
               </button>
            </div>

            {/* Locations */}
            <div className="filter-group">
               <div className="filter-group-title inter-body-one">
                  Locations
               </div>
               <div className="footer-location-list">
                  <select
                     {...register('location')}
                     id="filter-location"
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

            {/* Categories Accordion */}
            <div className="filter-group">
               <div className="filter-group-title inter-body-one">
                  Categories
               </div>
               {categories.map((category) => {
                  const parentChecked = selected.includes(category.name);
                  const childNames = category.children.map((c) => c.name);
                  const isExpanded = expanded[category.id] || false;

                  return (
                     <div className="category-group" key={category.id}>
                        {/* Parent Category */}
                        <div
                           className="parent-category flex items-center justify-between cursor-pointer"
                           onClick={() => toggleAccordion(category.id)}
                        >
                           <label className="flex items-center gap-2">
                              <input
                                 type="checkbox"
                                 className="filter-category"
                                 checked={parentChecked}
                                 onChange={(e) => {
                                    e.stopPropagation();
                                    handleParentToggle(
                                       category.name,
                                       childNames
                                    );
                                 }}
                              />
                              {category.name}
                           </label>
                           {category.children.length > 0 && (
                              <span
                                 className={`transition-transform duration-200 ${
                                    isExpanded ? 'rotate-180' : ''
                                 }`}
                              >
                                 <PointerDown />
                              </span>
                           )}
                        </div>

                        {/* Child Categories */}
                        {category.children?.length > 0 && isExpanded && (
                           <div className="child-categories pl-6 mt-1">
                              {category.children.map((child) => (
                                 <div className="child-category" key={child.id}>
                                    <label className="flex items-center gap-2">
                                       <input
                                          type="checkbox"
                                          className="filter-category"
                                          checked={selected.includes(
                                             child.name
                                          )}
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

            {/* Buttons */}
            <div className="flex flex-row justify-between gap-2.5 !py-5 !px-3">
               <button
                  className="btn-transparent !text-uppercase w-full !text-base !px-[18px] !py-[10px]"
                  onClick={handleClear}
               >
                  <span>Clear Filter</span>
               </button>
               <button
                  className="btn-primary w-full btn-transparent !px-[18px] !py-[10px]"
                  onClick={handleApply}
               >
                  <span>Apply</span>
               </button>
            </div>
         </div>
      </aside>
   );
}

export default ProjectShowcase;
