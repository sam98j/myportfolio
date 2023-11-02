import React from 'react'
import styles from './styles.module.scss';

const NavBar = () => {
  return (
    <nav className={`flex pt-5 ${styles.navbar}`}>
      {/* Logo */}
      <h1 className='text-5xl font-black flex items-center'>H<span className='text-purple-700'>.</span></h1>
      {/* NavBar */}
      <ul className='flex gap-4 items-center flex-grow justify-end'>
        <li>Home</li>
        <li>About</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
    </nav>
  )
}

export default NavBar