import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-1 text-2xl font-bold font-serif">Introduction</h4>
      <h2 className="text-center text-5xl font-bold">About me</h2>
      <div
        className="flex w-full flex-col lg:flex-row items-center
          gap-20 my-20"
      >
        <div className="w-64 sm:w-100 rounded-3xl max-w-none">
          <Image
            src={assets.main_nayab}
            alt={"user"}
            className="w-full h-64 rounded-3xl shadow-sm shadow-white"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-bold">
            I&apos;m an Experienced Frontend Feveloper with over a decade of
            professional expersite in the feild. ThroughOut my carreer, Ihave
            had the privillage of collaborating with prestigious organization,
            contributing to their sucess and growth
          </p>
          <ul className=" grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-2 shadow-md shadow-gray-500 bg-gray-400
                  rounded-xl p-6 cursor-pointer hover:translate-y-2 duration-300"
              >
                <Image className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-900 text-sm">{description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700  font-bold">Tools I use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14
              aspect-square border border-gray-400
               cursor-pointer hover:translate-y-2 duration-300
              bg-black
              rounded-lg "
              >
                <Image src={tool} alt={"tool"} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
