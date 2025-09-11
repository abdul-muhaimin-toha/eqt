import Link from 'next/link';
import Brifcase from '../icons/brifcase';
import Calender from '../icons/calender';
import Location from '../icons/location';

function CareerDetailsHeader({ headingDetails }) {
   const { title, location, deadline, vacancies, applyLink } = headingDetails;

   return (
      <div className="career-details-header-wraper">
         <div className="insights-description-header">
            <h2 className="heading-h2">{title}</h2>
            <ul className="job-promo-list">
               <li>
                  <Location />
                  <span>{location}</span>
               </li>
               <li>
                  <Calender />
                  <span>Deadline: {deadline}</span>
               </li>
               <li>
                  <Brifcase />
                  <span>Vacancies: {vacancies}</span>
               </li>
            </ul>
            <Link className="btn-transparent text-uppercase" href={applyLink}>
               <span>Apply Now</span>
            </Link>
         </div>
      </div>
   );
}

export default CareerDetailsHeader;
