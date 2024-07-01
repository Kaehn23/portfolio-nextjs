import Link from "next/link";
import React from "react";

const About = () => {
   return (
      <div
         id="about"
         className="w-full md:h-screen p-2 flex items-center py-16"
      >
         <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
            <div className="cols-span-2">
               <p className="uppercase text-xl  tracking-widest text-[#0F3] px-12  ">
                  {" "}
                  À propos{" "}
               </p>
               <div className="">
               <p className="py-2 ">
                  {" "}
                  Je suis Jeremy Iparraguirre. Developpeur web ... Mais pas que
                  !{" "}
               </p>

               <p className="py-2 ">
                  {" "}
                  Je suis un passionné de nature, de voyages, de musique & d'art
                  sous leurs formes les plus variées.
               </p>
               <p className="py-2 ">
                  Quand je ne suis pas devant mon ordinateur, je pars explorer
                  le monde et les alentours, pour revenir avec des idées
                  fraîches, et de nouvelles perspectives !
               </p>
               <p className="py-2 ">
                  J'ai pris le parti de ne montrer que les projets "from
                  scratch" que j'ai réalisés, pour vous montrer ce dont je suis
                  capable, et ce que je peux vous apporter.
               </p>
               </div>
               {/* <h2 className="py-4"> Qui suis je ? </h2> */}

               

               <Link href="/#projects">
                  <p className="py-2  underline cursor-pointer  ">
                     {" "}
                     Consultez mes projets !
                  </p>
               </Link>
            </div>
            <div className="w-full h-auto m-auto shadow-xl shadow-[#0F3]/50 glass-effect rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
               <Link href="/#projects">
                  <img
                     className="rounded-xl "
                     src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     width={400}
                     height={400}
                     layout="reponsive"
                     alt="about"
                  />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default About;
