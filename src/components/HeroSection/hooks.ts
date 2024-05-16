import { useQuery } from 'react-query';

export const useHeroSectionApi = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const { isLoading, error, data } = useQuery('hero-section-data', () =>
    fetch(`${API_URL}/hero_section`).then((res) => res.json())
  );
  return { isLoading, error, data };
};
