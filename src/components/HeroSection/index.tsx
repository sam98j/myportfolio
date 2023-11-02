import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss';
import ImageSVG from '../../../assets/undraw_javascript_frameworks_-8-qpc.svg';
import ScrollerBtn from '../ScrollerBtn';


const HeroSection = () => {
  return (
    <div className={`${styles.hero_section} flex`}>
      <div className={`h-full flex justify-center flex-col w-1/2`}>
        <h3 className={`text-6xl font-bold`}>Hi, I'm HosamAlden.</h3>
        <h4 className={`text-purple-700 text-4xl font-bold mb-7`}>Full-Stack Developer</h4>
        <p className={`text-1xl font-normal`}>I am a MERN Stack web developer with 3+ years of experience. I have a deep understanding of all four technologies in the MERN Stack, and I am able to use them to create high-performance, scalable, and user-friendly web applications.</p>
      </div>
      {/* hero svg */}
      <div className={`w-1/2 flex items-center justify-end`}>
        <Image src={ImageSVG} alt='svg' className='w-3/4'/>
      </div>
      <ScrollerBtn />
    </div>
  )
}

export default HeroSection