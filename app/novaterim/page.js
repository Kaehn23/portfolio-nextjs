import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import novaterimCard from "/public/assets/projects/novaterimCard.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const novaterim = () => {
   return (
      <div className="w-full">
         <Navbar />
         <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
            <Image
               className="absolute z-1"
               layout="fill"
               style={{ objectFit: "cover" }}
               src={novaterimCard}
               alt="Novaterim Mobile App Card"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 py-2">
               <h2 className="py-2">NovaTerim Mobile App</h2>
               <h3> React Native / Expo / MongoDB / Redux</h3>
            </div>
         </div>
         <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
               <p> Project</p>
               <h2 className="py-2">NovaTerim Mobile App</h2>
               <p className="p-2">
                  The application, developed using React Native, facilitates
                  seamless operation across different platforms, offering users
                  the convenience to electronically sign contracts, upload
                  required documents, and retrieve their payslips effortlessly.
               </p>
               <p className="p-2">
                  {" "}
                  It incorporates a strong user verification system to ensure
                  access is secure and personal data is safeguarded.
               </p>
               <p className="p-2">
                  For data handling, MongoDB serves as the database, offering a
                  scalable and efficient approach to managing users' information
                  and documents with security.{" "}
               </p>
               <p className="p-2">
                  The app's design is ensuring it is responsive and visually
                  appealing on a wide range of devices.{" "}
               </p>
               <button className="px-8 py-2 mt-4 mr-8"> Demo</button>
               <button className="px-8 py-2 mt-4"> GitHub </button>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 ">
               <div className="p-2">
                  <p className="text-center font-bold pb-2"> Technologies</p>
                  <div className="grid grid-cols-3 md:grid-cols-1">
                     <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> React Native
                     </p>
                     <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> Expo
                     </p>
                     <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> Redux
                     </p>
                     <p className="text-gray-600 py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> MongoDB
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

export default novaterim;
