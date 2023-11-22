import React from 'react'
import {BiLogoReact} from 'react-icons/bi'
import {SiNextdotjs} from 'react-icons/si'
import {DiNodejs, DiJavascript1, DiMongodb} from 'react-icons/di'
import Link from 'next/link'
import Image from 'next/image'

const ProjectCard = () => {
  return (
    <div className='flex flex-col h-[500px] border max-w-[32rem] p-[1rem] rounded-2xl'>
        {/* project image */}
        <div className='h-1/2 bg-yellow-100 m-[-1rem] mb-2 rounded-t-2xl'>
           
        </div>
        {/* project title */}
        <h5 className='text-[1.75rem] font-bold mb-5'>Messaging App</h5>
        <p className='text-base text-[#525252]' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus reprehenderit assumenda alias! Perferendis error perspiciatis adipisci, soluta nulla numquam?</p>
        {/* tech stack */}
        <div className='flex mt-5 gap-5'>
            <BiLogoReact />
            <SiNextdotjs />
            <DiNodejs />
            <DiJavascript1 />
            <DiMongodb />
        </div>
        {/* links */}
        <div className='mt-5 gap-5 flex'>
            <Link href={'/'} className='bg-purple-700 text-white p-2 rounded-xl'>
                View Code
            </Link>
            <Link href={'/'} className='border border-purple-700 rounded-xl p-2'>
                Live Demo
            </Link>
        </div>
    </div>
  )
}

export default ProjectCard