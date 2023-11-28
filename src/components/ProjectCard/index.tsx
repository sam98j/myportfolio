import React from 'react';
import { BiLogoReact } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { DiNodejs, DiJavascript1, DiMongodb } from 'react-icons/di';
import Link from 'next/link';
import Image from 'next/image';

export interface Project {
  name: string;
  disc: string;
  _id: string;
  img: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { name, disc, _id, img } = project;
  return (
    <div className="flex flex-col h-[500px] border max-w-[32rem] p-[1rem] rounded-2xl">
      {/* project image */}
      <div className="bg-yellow-100 m-[-1rem] mb-2 rounded-t-2xl">
        <Image
          alt="img"
          src={img}
          className="w-full h-full rounded-t-2xl"
          width={100}
          height={100}
        />
      </div>
      {/* project title */}
      <h5 className="text-[1.75rem] font-bold mb-5">{name}</h5>
      <p className="text-base text-[#525252]">{disc}</p>
      {/* tech stack */}
      <div className="flex mt-5 gap-5">
        <BiLogoReact />
        <SiNextdotjs />
        <DiNodejs />
        <DiJavascript1 />
        <DiMongodb />
      </div>
      {/* links */}
      <div className="mt-5 gap-5 flex">
        <Link href={'/'} className="bg-purple-700 text-white p-2 rounded-xl">
          View Code
        </Link>
        <Link href={'/'} className="border border-purple-700 rounded-xl p-2">
          Live Demo
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
