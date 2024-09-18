"use client";
import Link from "next/link";
import React from "react";
import { TypewriterEffect } from "./ui/Typewritter-effect";


const About = () => {
   const words = [
      {
         text: "Consultez ",
         className: "text-white-600 text-sm cursor-pointer  ",
      },
      { text: "mes", className: "text-white-600 text-sm cursor-pointer" },
      {
         text: "projets",
         className: "text-white-600 text-sm underline cursor-pointer",
      },
      { text: "!", className: "text-white-600 text-sm cursor-pointer " },
   ];

   
   return (
      <div
         id="about"
         className="relative w-full md:h-screen p-2 flex items-center py-16"
      >
         <div className="relative z-10 max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 items-center">
            <div className="col-span-1">
               <p className="uppercase text-xl tracking-widest text-[#0F3] px-12 mt-5">
                  À propos
               </p>
               <div className="glass-effect">
                  <p className="py-2">
                     Je suis Jeremy Iparraguirre. Développeur web ... Mais pas
                     que !
                  </p>
                  <p className="py-2">
                     Je suis un passionné de nature, de voyages, de musique &
                     d'art sous leurs formes les plus variées.
                  </p>
                  <p className="py-2">
                     Quand je ne suis pas devant mon ordinateur, je pars
                     explorer le monde et les alentours, pour revenir avec des
                     idées fraîches, et de nouvelles perspectives !
                  </p>
                  <p className="py-2">
                     J'ai pris le parti de ne montrer que les projets "from
                     scratch" que j'ai réalisés, pour vous montrer ce dont je
                     suis capable, et ce que je peux vous apporter.
                  </p>
               </div>
               <Link href="/#projects">
                  <h3>
                     <TypewriterEffect 
                     className="flex items-center justify-center"
                     words={words} />
                  </h3>
               </Link>
            </div>
            <div className="col-span-1 w-full h-auto shadow-xl shadow-[#0F3]/50 glass-effect rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
               <Link href="/#projects">
                  <img
                     className="rounded-xl border-2 border-black "
                     src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Utilise l'image téléchargée
                     alt="about"
                  />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default About;
