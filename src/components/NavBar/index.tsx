"use client"
import React from 'react'
import styles from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  // pathname hook
  const currentRoute = usePathname();
  return (
    <nav className={`flex pt-5 ${styles.navbar}`}>
      {/* Logo */}
      <h1 className='text-5xl font-black flex items-center'>H<span className='text-purple-700'>.</span></h1>
      {/* NavBar */}
      <ul className='flex gap-4 items-center flex-grow justify-end'>
        <Link href={'/'}>
          <li className={currentRoute === '/' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Home</li>
        </Link>
        <Link href={'/about'}>
          <li className={currentRoute === '/about' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>About</li>
        </Link>
        <Link href={'/resume'}>
          <li className={currentRoute === '/resume' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Resume</li>
        </Link>
        <Link href={'/projects'}>
          <li className={currentRoute === '/projects' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Projects</li>
        </Link>
        <Link href={'/contacts'}>
          <li className={currentRoute === '/contacts' ? 'text-purple-700 border-purple-300 border-b-2' : ''}>Contacts</li>
        </Link>
      </ul>
    </nav>
  )
}

export default NavBar