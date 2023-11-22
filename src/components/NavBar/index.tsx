"use client"
import React, { useState } from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {FiMenu, FiSun} from 'react-icons/fi'

const NavBar = () => {
  // state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // handle burger menu click
  const burgerMenuClickHandler = () => setIsMenuOpen(() => isMenuOpen ? false : true);
  // pathname hook
  const currentRoute = usePathname();
  return (
    <nav className={`flex pt-5 sm:relative ${styles.navbar}`}>
      {/* Logo */}
      <h1 className='text-5xl font-black flex-grow flex items-center'>H<span className='text-purple-700'>.</span></h1>
      {/* burger menu */}
      <div className='lg:hidden sm:flex items-center' onClick={burgerMenuClickHandler}>
        <FiMenu className='h-[10rem]' />
      </div>
      {/* NavBar */}
      <ul className={`${isMenuOpen ? 'sm:max-md:p-5 sm:max-md:h-fit' : 'sm:max-md:h-0'} transition-all flex gap-4 sm:max-md:w-full sm:max-md:flex-col overflow-hidden rounded-lg sm:max-md:bg-white lg:items-center sm:max-md:absolute sm:max-md:top-[70px] justify-end`}>
        <Link href={'/'}>
          <li className={currentRoute === '/' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Home</li>
        </Link>
        <Link href={'/#about'}>
          <li className={currentRoute === '/about' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>About</li>
        </Link>
        <Link href={'/resume'}>
          <li className={currentRoute === '/resume' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Resume</li>
        </Link>
        <Link href={'/#projects'}>
          <li className={currentRoute === '/projects' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Projects</li>
        </Link>
        <Link href={'#contacts'}>
          <li className={currentRoute === '/contacts' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Contacts</li>
        </Link>
        <button>
          <FiSun />
        </button>
        <Link href={'/ar'}>عربي</Link>
      </ul>
    </nav>
  )
}

export default NavBar