import React from "react";
import Image from "next/image";
import Link from "next/link";

const Resume = () => {
   return (
      <div className="flex flex-col items-center justify-center h-screen">
         <div className="relative w-full h-0 flex-grow">
            <Image
               layout="fill"
               objectFit="contain"
               src="/assets/resume/frenchResume.png"
               alt="mon CV en français"
               className="z-0"
            />
         </div>

         <div className="mt-4">
            <Link href="/">
               <div className="underline cursor-pointer text-gray-600 hover:text-gray-800">
                  Retour au site
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Resume;
