import { useQuery } from 'react-query';

export const useProjectsApi = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { isLoading, error, data } = useQuery('projects-section-data', () =>
    fetch(`${API_URL}/projects/all`).then((res) => res.json())
  );
  return { isLoading, error, data };
};
