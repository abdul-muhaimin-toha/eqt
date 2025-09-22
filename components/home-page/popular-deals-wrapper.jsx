import { getProjectData } from '@/graphql/components/get-projects-data';
import PopularDeals from './popular-deals';

async function PopularDealsWrapper({ data }) {
   const projectIds = data.data.selected_projects.map((project) => project.id);
   const projects = await getProjectData(projectIds);

   return <PopularDeals data={data} projects={projects} />;
}

export default PopularDealsWrapper;
