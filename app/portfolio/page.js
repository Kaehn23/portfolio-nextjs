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
               <p> Projet</p>
               <h2>Portfolio Website</h2>
               <p className="p-2">
                  Bienvenue sur mon portfolio en ligne, conçu avec une
                  philosophie de simplicité et d'efficacité.
               </p>
               <p className="p-2">
                  Chaque élément de ce site a été méticuleusement choisi pour
                  fournir une expérience utilisateur fluide et agréable, libre
                  de toute complexité inutile.
               </p>
               <p className="p-2">
                  Adaptatif et responsive, mon portfolio assure une navigation
                  intuitive sur une large gamme d'appareils, que ce soit sur un
                  ordinateur, une tablette ou un smartphone.
               </p>
               <p className="p-2">
                  Ce site reflète mon approche globale : claire, directe et
                  efficace.
               </p>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4 glass-effect ">
               <div className="p-2">
                  <p className="text-center font-bold pb-2"> Technologies</p>
                  <div className="grid grid-cols-3 md:grid-cols-1">
                     <p className=" py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> React
                     </p>
                     <p className=" py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> NextJS
                     </p>
                     <p className=" py-2 flex items-center">
                        <RiRadioButtonFill className="pr-1" /> Tailwind
                     </p>
                  </div>
               </div>
            </div>
            <Link href="/#projects">
               <p className="underline cursor-pointer">Retour aux projets</p>
            </Link>
         </div>
      </div>
   );
};

export default portfolio;
