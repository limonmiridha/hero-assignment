'use client';

import ProjectCard from '@/components/Card/ProjectCard';
import useProjects from '@/hooks/useProjects';

const ProjectUi = () => {
  const { projects } = useProjects();

  return (
    <div>
      <h1 className="text-2xl font-medium my-4">Projects</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 max-md:mb-8">
        {projects?.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectUi;
