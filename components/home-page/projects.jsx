import { getProjectData } from '@/graphql/components/get-projects-data';
import ProjectTabs from './projects-tabs';

export default async function Projects({ data }) {
   const projectIds = data.data.selected_events.map((event) => event.id);
   const projects = await getProjectData(projectIds);

   return <ProjectTabs data={data} projects={projects} />;
}
