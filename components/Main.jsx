"use client";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import MatrixEffect from "./MatrixEffect";

const Main = () => {
   const handleMailClick = () => {
      window.location.href = "mailto:jeremy.iparraguirre@gmail.com";
   };

   return (
      <>
         <Head>
            <title>Accueil - Jeremy, Développeur Full Stack</title>
            <meta
               name="description"
               content="Bienvenue sur le portfolio de Jeremy, un développeur full stack passionné par le développement web et mobile. Découvrez mes projets et compétences."
            />
         </Head>
         <div id="home" className="w-full h-screen text-center relative md:p-4">
            <MatrixEffect />
            <div className="max-w-[1240px] w-full h-full mx-auto  p-2 flex justify-center items-center relative z-1">
               <div className=" md:mt-16 sm:mt-4 ">
                  <p className="uppercase text-sm tracking-widest text-white-600 my-4 md:my-6  animate-reveal glass-effect">
                     Construisons ensemble
                  </p>

                  {/* Image de profil */}
                  <img
                     src="/assets/profilePic1.png"
                     alt="Votre Nom"
                     className="rounded-full shadow-xl shadow-[#0F0]/50 hover:scale-110 ease-in duration-500 mx-auto my-8 animate-reveal2"
                     style={{ maxWidth: "200px", maxHeight: "200px" }}
                  />
                  <div className="animate-reveal2 glass-effect ">
                     <h1 className="py-4 ">
                        
                        <p className="text-[#0F0]"> Iparraguirre Jeremy</p>
                     </h1>
                     <h2 className="">Full-stack developper</h2>
                     <p className="py-4 max-w-[70%] m-auto ">
                        Je suis passionné par le développement web & mobile.
                     </p>
                     <a className="py-2 text-2xl underline " href="resume">
                        Consultez mon CV !
                     </a>
                  </div>

                  <div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
                     <Link href="https://www.linkedin.com/in/iparraguirre-jeremy-3b391a2a3/">
                        <div className="rounded-full shadow-lg glass-effect2 animate-reveal3 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                           <FaLinkedinIn />
                        </div>
                     </Link>
                     <Link href="https://github.com/Kaehn23">
                     <div className="rounded-full shadow-lg glass-effect2 animate-reveal3 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                           <FaGithub />
                        </div>
                     </Link>
                     <div
                        className="rounded-full shadow-lg glass-effect2 animate-reveal3 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                        onClick={handleMailClick}
                     >
                        <AiOutlineMail />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Main;
