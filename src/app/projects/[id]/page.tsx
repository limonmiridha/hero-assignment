'use client';
import useProjects from '@/hooks/useProjects';
import ProjectDetails from '@/views/project/project-details';

const page = ({ params }: any) => {
  const { projects } = useProjects();
  const project = projects?.find((project: any) => project.id == params.id);

  return <ProjectDetails project={project} />;
};

export default page;
