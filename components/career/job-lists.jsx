'use client';

import Link from 'next/link';
import Location from '../icons/location';
import Calender from '../icons/calender';
import Brifcase from '../icons/brifcase';
import { useState } from 'react';

function JobCard({ job }) {
   return (
      <div className="career-card">
         <div className="card-body">
            <h3 className="card-title heading-h4">
               <Link href={`career/${job.slug}`}>{job.title}</Link>
            </h3>

            <ul>
               <li>
                  <Location />
                  <span>{job.careerJobLocation}</span>
               </li>
               <li>
                  <Calender />
                  <span>{job.careerJobDeadline}</span>
               </li>
               <li>
                  <Brifcase />
                  <span>{job.careerVacancies}</span>
               </li>
            </ul>

            <Link
               href={`career/${job.slug}`}
               className="btn-transparent view-all-btn text-uppercase"
            >
               <span>View Details</span>
            </Link>
         </div>
      </div>
   );
}

function JobLists({ data, careers = [] }) {
   const [visibleCount, setVisibleCount] = useState(4);
   const { title = '', opening_title = '' } = data?.data || {};

   const visibleCareers = careers.slice(0, visibleCount);

   const handleLoadMore = () => setVisibleCount((prev) => prev + 4);

   return (
      <section className="career-job-list bg-white">
         <div className="container">
            <div className="career-title">
               <h2 className="heading-h2 text-center">{title}</h2>
               <p className="text-center inter-body-one color-two">
                  {careers.length} {opening_title}
               </p>
            </div>

            {visibleCareers.map((job) => (
               <JobCard key={job.id} job={job} />
            ))}

            {visibleCount < careers.length && (
               <div className="load-more-wrapper text-center">
                  <button
                     className="load-more-btn btn-transparent"
                     onClick={handleLoadMore}
                  >
                     <span>Load More</span>
                  </button>
               </div>
            )}
         </div>
      </section>
   );
}

export default JobLists;
