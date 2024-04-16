import React from "react";
import Image from "next/image";
import Link from "next/link";


const Projectitems = ({ title, backgroundImg, altText, projectUrl,technoUsed }) => {
   return (
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#9ebb5f] to-[#e7e8cb]">
         <Image
            className="rounded-xl h-full group-hover:opacity-20 hover:scale-105 ease-in duration-300 "
            src={backgroundImg}
            alt={altText}
         />

         <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-2xl text-gray tracking-wider text-center">
               {title}
            </h3>
            <p className="pb-4 pt-2 text-center tracking-widest" >{technoUsed}</p>
            <Link href={projectUrl} >
               <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  Découvrir
               </p>
            </Link >
         </div>
      </div>
   );
};

export default Projectitems;
