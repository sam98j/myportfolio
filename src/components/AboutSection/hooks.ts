import { useQuery } from 'react-query';

export const useAboutMeApi = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { isLoading, error, data } = useQuery('about-me-data', () =>
    fetch(`${API_URL}/about_me`).then((res) => res.json())
  );
  return { isLoading, error, data };
};
