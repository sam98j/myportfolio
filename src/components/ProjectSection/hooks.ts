import { useQuery } from 'react-query';

export const useProjectsApi = () => {
  const { isLoading, error, data } = useQuery('projects-section-data', () =>
    fetch('http://localhost:4000/projects/all').then((res) => res.json())
  );
  return { isLoading, error, data };
};
