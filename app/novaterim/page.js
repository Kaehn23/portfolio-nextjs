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
                  Cette application, développée en utilisant React Native et
                  Expo, facilite une opération sans accrocs sur différentes
                  plateformes, offrant aux utilisateurs la commodité de signer
                  électroniquement des contrats, de télécharger les documents
                  requis et de récupérer leurs fiches de paie sans effort.
               </p>
               <p className="p-2">
                  Elle intègre un système de vérification d'utilisateur robuste
                  pour assurer que l'accès est sécurisé et que les données
                  personnelles sont protégées.
               </p>
               <p className="p-2">
                  Pour la gestion des données, MongoDB sert de base de données,
                  offrant une approche évolutive et efficace pour gérer les
                  informations et les documents des utilisateurs avec sécurité.
               </p>
               <p className="p-2">
                  La conception de l'app garantit qu'elle soit responsive et
                  visuellement attrayante sur une large gamme d'appareils.
               </p>
               <button className="px-8 py-2 mt-4 mr-8">
                  <Link href="https://www.youtube.com/watch?v=vHH9Yl_J7hM">
                  Demo
                  </Link>
               </button>
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
               <p className="underline cursor-pointer">Retour aux projets</p>
            </Link>
         </div>
      </div>
   );
};

export default novaterim;
