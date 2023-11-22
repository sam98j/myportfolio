'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ImageSVG from '../../../assets/undraw_javascript_frameworks_-8-qpc.svg';
import ScrollerBtn from '../ScrollerBtn';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useHeroSectionApi } from './hooks';

const HeroSection = () => {
  const { data } = useHeroSectionApi();
  return (
    <div className={`${styles.hero_section} flex`}>
      <div
        className={`h-full flex justify-center flex-col w-1/2 sm:max-md:w-full`}
      >
        <h3 className={`text-6xl font-bold`}>{data && data.greeting.en}</h3>
        <h4 className={`text-purple-700 text-4xl font-bold mb-7`}>
          {data && data.titiles[0].en}
        </h4>
        <p className={`text-1xl font-normal mb-5`}>
          {data && data.overview.en}
        </p>
        {/* links */}
        <div className="flex gap-2">
          <Link
            href={'/'}
            className="bg-purple-700 p-3 rounded-xl flex items-center justify-center aspect-square h-full"
          >
            <FiGithub className="text-white" />
          </Link>
          <Link
            href={'/'}
            className="bg-purple-700 p-3 rounded-xl flex items-center justify-center aspect-square h-full"
          >
            <FiLinkedin className="text-white" />
          </Link>
          <Link
            href={'/'}
            className="border-2 border-purple-400 py-2 px-4 block rounded-xl font-bold"
          >
            GET IN TOUCH
          </Link>
          <Link
            href={'/'}
            className="border-2 border-purple-400 py-2 px-4 block rounded-xl font-bold"
          >
            RESUME
          </Link>
        </div>
      </div>
      {/* hero svg */}
      <div className={`w-1/2 flex items-center justify-end sm:max-md:hidden`}>
        <Image src={ImageSVG} alt="svg" className="w-3/4" />
      </div>
      <ScrollerBtn />
    </div>
  );
};

export default HeroSection;
