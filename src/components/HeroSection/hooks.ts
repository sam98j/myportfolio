import { useQuery } from 'react-query';

export const useHeroSectionApi = () => {
  const { isLoading, error, data } = useQuery('hero-section-data', () =>
    fetch('http://localhost:4000/hero_section').then((res) => res.json())
  );
  return { isLoading, error, data };
};
