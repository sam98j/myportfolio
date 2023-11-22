'use client';
import HeroSection from '@/components/HeroSection';
import styles from './styles.module.scss';
import ProjectSection from '@/components/ProjectSection';
import AboutSection from '@/components/AboutSection';
import FooterSection from '@/components/FooterSection';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className={styles.home}>
      <QueryClientProvider client={queryClient}>
        {/* hero text */}
        <HeroSection />
        <ProjectSection />
        <AboutSection />
        <FooterSection />
      </QueryClientProvider>
    </main>
  );
}
