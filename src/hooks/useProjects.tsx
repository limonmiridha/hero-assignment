import { fetchProjects } from '@/api/projectsApi';
import { useQuery } from 'react-query';

const useProjects = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useQuery('projects', fetchProjects, {
    // select: data => data.data,
    onError: (err: { message: string }) => console.error(err.message),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error as any) return <div>An error occurred: {error?.message}</div>;
  return { projects } as any;
};

export default useProjects;
