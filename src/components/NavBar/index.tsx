'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiSun } from 'react-icons/fi';

const NavBar = () => {
  // state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // handle burger menu click
  const burgerMenuClickHandler = () =>
    setIsMenuOpen(() => (isMenuOpen ? false : true));
  // pathname hook
  const currentRoute = usePathname();
  return (
    <nav className={`flex pt-5 relative ${styles.navbar}`}>
      {/* Logo */}
      <h1 className="text-5xl font-black flex-grow flex items-center">
        H<span className="text-purple-700">.</span>
      </h1>
      {/* burger menu */}
      <div
        className="md:hidden flex items-center"
        onClick={burgerMenuClickHandler}
      >
        <FiMenu size={25} />
      </div>
      {/* NavBar */}
      <ul
        className={`${
          isMenuOpen ? 'p-5 h-fit' : 'h-0 md:h-full'
        } transition-all flex gap-4 w-full flex-col md:flex-row overflow-hidden rounded-lg bg-white md:bg-inherit md:items-center absolute md:relative top-[70px] md:top-0 justify-end`}
      >
        <Link href={'/'}>
          <li
            className={
              currentRoute === '/'
                ? 'w-fit text-purple-700 border-purple-300 border-b-2'
                : ''
            }
          >
            Home
          </li>
        </Link>
        <Link href={'/#about'}>
          <li
            className={
              currentRoute === '/about'
                ? 'w-fit text-purple-700 border-purple-300 border-b-2'
                : ''
            }
          >
            About
          </li>
        </Link>
        <Link href={'/resume'}>
          <li
            className={
              currentRoute === '/resume'
                ? 'w-fit text-purple-700 border-purple-300 border-b-2'
                : ''
            }
          >
            Resume
          </li>
        </Link>
        <Link href={'/#projects'}>
          <li
            className={
              currentRoute === '/projects'
                ? 'w-fit text-purple-700 border-purple-300 border-b-2'
                : ''
            }
          >
            Projects
          </li>
        </Link>
        <Link href={'#contacts'}>
          <li
            className={
              currentRoute === '/contacts'
                ? 'w-fit text-purple-700 border-purple-300 border-b-2'
                : ''
            }
          >
            Contacts
          </li>
        </Link>
        <button>
          <FiSun />
        </button>
        <Link href={'/ar'}>عربي</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
