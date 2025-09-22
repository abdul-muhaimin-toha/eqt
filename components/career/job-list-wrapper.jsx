import { getPaginatedCareersData } from '@/graphql/components/get-jobs-data';
import JobLists from './job-lists';

async function JobListWrapper({ data }) {
   const { careers } = await getPaginatedCareersData(4, null);

   return <JobLists data={data} careers={careers} />;
}

export default JobListWrapper;
