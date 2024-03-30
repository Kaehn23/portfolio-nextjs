import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import portfolioCard from "/public/assets/projects/portfolioCard.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const portfolio = () => {
   return (
      <div className="w-full">
         <Navbar />
         <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
            <Image
               className="absolute z-1"
               layout="fill"
               style={{ objectFit: "cover" }}
               src={portfolioCard}
               alt="Novaterim Mobile App Card"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2">
               <h2 className="py-2">My Portfolio website</h2>
               <h3>NextJS / Tailwind </h3>
            </div>
         </div>
         <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
               <p> Project</p>
               <h2>Portfolio Website</h2>
               <p className="p-2">Welcome to my online portfolio, a showcase designed with a philosophy of simplicity and effectiveness.</p>
               <p className="p-2">Every element on this site has been meticulously chosen to provide a smooth and enjoyable user experience, free from unnecessary complexity.</p>
               <p className="p-2">Adaptive and responsive, my portfolio ensures intuitive navigation across a wide range of devices, whether on a computer, tablet, or smartphone.</p>
               <p className="p-2">This site reflects my global approach: clear, direct, and efficient.</p>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
               <div className="p-2">
                  <p className="text-center font-bold pb-2"> Technologies</p>
                  <div className="grid grid-cols-3 md:grid-cols-1">
                  <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> React
                     </p>
                     <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> NextJS
                     </p>
                     <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> Tailwind
                     </p>
                  </div>
               </div>
            </div>
            <Link href="/#projects">
               <p className="underline cursor-pointer">Back to Projects!</p>
            </Link>
         </div>
      </div>
   );
};

export default portfolio;
