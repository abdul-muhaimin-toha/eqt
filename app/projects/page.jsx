import SecondaryHero from '@/components/commons/secondary-hero';
import ProjectShowcase from '@/components/projects/project-showcase';

export default function ProjectsPage() {
   return (
      <div className="bg-white">
         <SecondaryHero title="Projects" />
         <ProjectShowcase />
      </div>
   );
}
