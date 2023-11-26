import Link from 'next/link';
import React from 'react';
import { useAboutMeApi } from './hooks';

const AboutSection = () => {
  // api hook
  const { data, isLoading } = useAboutMeApi();
  console.log(data);
  return (
    <main className="pt-32 flex" id="about">
      {/* text section */}
      <div className="w-1/2">
        <h4 className="text-4xl font-bold mb-5">
          {!isLoading && data.greeting.en}
        </h4>
        {/* first pra */}
        <p className="text-[#2D3436]">{!isLoading && data.info.en}</p>
        {/* read more link */}
        <Link
          href={'/'}
          className="bg-purple-700 text-white rounded-xl p-2 my-5 inline-block"
        >
          READ MORE
        </Link>
      </div>
      <div className="w-1/2 flex justify-end">
        {/* image container */}
        <div className="w-[300px] h-[400px] bg-purple-100 rounded-xl"></div>
      </div>
      {/* photo section */}
    </main>
  );
};

export default AboutSection;
