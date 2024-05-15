import Link from 'next/link';
import React from 'react';
import { IconContext } from 'react-icons';
import { BiLogoLinkedin, BiMailSend } from 'react-icons/bi';
import { DiGithub } from 'react-icons/di';

const FooterSection = () => {
  return (
    <footer className="pt-32 flex flex-wrap flex-col md:flex-row" id="contacts">
      {/* let's connect */}
      {/* section a */}
      <div className="flex-grow md:w-1/2">
        <h5 className="text-4xl font-bold">Let&apos;s connect</h5>
        <p className="my-5 bg-gray-100 md:w-fit p-3 rounded-xl">
          Shoot me email to chat about my work or just like to say hey 👋
        </p>
      </div>
      {/* section b */}
      <div className="w-1/2">
        {/* social media */}
        <div className="flex gap-5 justify-end">
          <Link
            href={'/'}
            className="inline-block bg-black text-white p-3 rounded-md"
          >
            <DiGithub />
          </Link>
          <Link
            href={'/'}
            className="inline-block bg-black text-white p-3 rounded-md"
          >
            <BiMailSend />
          </Link>
          <Link
            href={'/'}
            className="inline-block bg-black text-white p-3 rounded-md"
          >
            <BiLogoLinkedin />
          </Link>
        </div>
        <p className="md:text-end my-5">Back to Top</p>
      </div>
      <p className="w-full my-10">
        ©2023 Design Inspired from Nigar Saparova👋, and Coded By me ❤️
      </p>
    </footer>
  );
};

export default FooterSection;
