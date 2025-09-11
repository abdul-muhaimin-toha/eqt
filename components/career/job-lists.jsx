import Link from 'next/link';
import Location from '../icons/location';
import Calender from '../icons/calender';
import Brifcase from '../icons/brifcase';

const jobs = [
   {
      title: 'Customer Marketing Manager',
      location: 'Dhaka',
      deadline: '20 Aug 2023',
      vacancies: 1,
      link: '/career/1',
   },
   {
      title: 'Healthcare Promotion Officer',
      location: 'Dhaka',
      deadline: '20 Aug 2023',
      vacancies: 1,
      link: '/career/1',
   },
   {
      title: 'Customer Marketing Manager',
      location: 'Dhaka',
      deadline: '20 Aug 2023',
      vacancies: 1,
      link: '/career/1',
   },
   {
      title: 'Executive – Corporate Sales (Male)',
      location: 'Dhaka',
      deadline: '20 Aug 2023',
      vacancies: 1,
      link: '/career/1',
   },
];

function JobCard({ job }) {
   return (
      <div className="career-card">
         <div className="card-body">
            <h3 className="card-title heading-h4">
               <Link href={job.link}>{job.title}</Link>
            </h3>
            <ul>
               <li>
                  <Location />
                  <span>{job.location}</span>
               </li>
               <li>
                  <Calender />
                  <span>Deadline: {job.deadline}</span>
               </li>
               <li>
                  <Brifcase />
                  <span>Vacancies: {job.vacancies}</span>
               </li>
            </ul>
            <Link
               href={job.link}
               className="btn-transparent view-all-btn text-uppercase"
            >
               <span>View All</span>
            </Link>
         </div>
      </div>
   );
}

function JobLists() {
   return (
      <section className="career-job-list bg-white">
         <div className="container">
            <div className="career-title">
               <h2 className="heading-h2 text-center">Current openings</h2>
               <p className="text-center inter-body-one color-two">
                  {jobs.length} Open Positions
               </p>
            </div>

            {jobs.map((job, idx) => (
               <JobCard key={idx} job={job} />
            ))}
         </div>
      </section>
   );
}

export default JobLists;
