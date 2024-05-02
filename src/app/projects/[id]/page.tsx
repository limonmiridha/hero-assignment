'use client';
import useProjects from '@/hooks/useProjects';
import ProjectDetails from '@/views/project/project-details';
import React from 'react';
import { useQuery } from 'react-query';

const page = ({ params }: any) => {
  //   const fetchProject = async (projectId: string) => {
  //     const response = await fetch(`/api/db.json`);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   };

  //   const {
  //     data: project,
  //     error,
  //     isLoading,
  //   } = useQuery(['project', params.id], () => fetchProject(params.id as string));

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error instanceof Error) return <div>Error: {error.message}</div>;
  const { projects } = useProjects();
  const project = projects?.find((project: any) => project.id == params.id);
  console.log(project);

  return <ProjectDetails project={project} />;
};

export default page;
