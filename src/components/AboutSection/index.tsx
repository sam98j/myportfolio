import Link from 'next/link'
import React from 'react'

const AboutSection = () => {
  return (
    <main className='pt-32 flex' id='about'>
        {/* text section */}
        <div className='w-1/2'>
            <h4 className='text-4xl font-bold mb-5'>Hi there! 👋</h4>
            {/* first pra */}
            <p className='mb-5 text-[#2D3436]'>
            I am HosamAlden (some call me sam😄), an self-taught MERN Stack Developer based in Sudan. Coding is my passion, and I love to tackle new challenges and find solutions. I am enthusiastic about discovering new technologies and ideas, and my keen eye for details helps me perfect my code.
            </p>
            <p className='text-[#2D3436]'>
            I am HosamAlden (some call me sam😄), an self-taught MERN Stack Developer based in Sudan. Coding is my passion, and I love to tackle new challenges and find solutions. I am enthusiastic about discovering new technologies and ideas, and my keen eye for details helps me perfect my code. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, adipisci consequuntur sint quo quia tenetur laudantium voluptatem ex natus nulla. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam accusantium aspernatur saepe iure asperiores fugit dolor ipsum amet ea quo.
            </p>
            {/* read more link */}
            <Link href={'/'} className='bg-purple-700 text-white rounded-xl p-2 my-5 inline-block'>
                READ MORE
            </Link>
        </div>
        <div className='w-1/2 flex justify-end'>
            {/* image container */}
            <div className='w-[300px] h-[400px] bg-purple-100 rounded-xl'></div>
        </div>
        {/* photo section */}
    </main>
  )
}

export default AboutSection