import HeroSection from '@/components/HeroSection';
import styles from './styles.module.scss';
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.home}>
      {/* hero text */}
      <HeroSection />
    </main>
  )
}
