import CareerDetailsHeader from '@/components/career/career-details-header';
import PostDetails from '@/components/commons/post-details';
import { getCareerBySlug } from '@/graphql/components/get-jobs-data';

export default async function CareerDetailsPage({ params }) {
   const { slug } = params;
   const career = await getCareerBySlug(slug);

   if (!career) {
      redirect('/career');
   }

   return (
      <section className="insights-description-wrapper careeer-details-wrapper bg-white">
         <div className="container">
            <CareerDetailsHeader
               headingDetails={{
                  title: career.title,
                  location: career.careerJobLocation,
                  deadline: career.careerJobDeadline,
                  vacancies: career.careerVacancies,
                  applyLink: `/career/${career.slug}/apply`,
               }}
            />
         </div>
         <PostDetails
            dummyRichtext={career.content}
            applyLink={`/career/${career.slug}/apply`}
         />
      </section>
   );
}
