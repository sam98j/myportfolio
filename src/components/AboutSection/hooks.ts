import { useQuery } from 'react-query';

export const useAboutMeApi = () => {
  const { isLoading, error, data } = useQuery('about-me-data', () =>
    fetch('http://localhost:4000/about_me').then((res) => res.json())
  );
  return { isLoading, error, data };
};
