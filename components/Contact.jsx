"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { LuArrowUp } from "react-icons/lu";

const Contact = () => {
   const handleMailClick = () => {
      window.location.href = "mailto:jeremy.iparraguirre@gmail.com";
   };

   return (
      <div
         id="contact"
         className="w-full flex flex-col items-center justify-center py-16"
      >
         <div className="max-w-4xl px-4 w-full">
            <p className="text-xl tracking-widest uppercase text-[#0F3] text-center m-8">
               Contactez moi
            </p>
            {/* <h2 className="py-4 text-center">Par ici !</h2> */}
            <div className="flex flex-col items-center justify-center">
               {/* Image Section */}
               <div className="w-full shadow-xl shadow-gray-400 glass-effect rounded-xl p-4 flex flex-col items-center justify-center">
                  <img
                     className="rounded-xl hover:scale-105 ease-in duration-300 max-w-md w-full"
                     src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="Une photo de téléphone pour pouvoir me contacter"
                  />
                  <div className="text-center mt-4">
                     <h2 className="p-4">Jérémy Iparraguirre</h2>
                     <p className="tracking-widest">Fullstack Developper</p>
                     <p className="py-4">
                        Je suis actuellement à la recherche d'un stage,{" "}
                        <span className="font-bold">de 3 à 6 mois,</span> pour
                        consolider et approfondir mes compétences.
                     </p>

                     <p className="py-4">
                        Je suis aussi disponible pour des missions freelance.
                     </p>
                  </div>
                  <div className="pt-8 underline text-center">
                     Contactez-moi :
                  </div>
                  <span>
                     <a
                        href="tel:0674845013"
                        className="pt-2 font-bold flex items-center justify-center"
                     ><span></span>
                        <FaSquarePhone /> 06 74 84 50 13
                     </a>
                  </span>
                  <div className="flex items-center justify-center py-8 gap-4">
                     <Link href="https://www.linkedin.com/in/iparraguirre-jeremy-3b391a2a3/">
                        <div className="rounded-full shadow-lg shadow-[#0F0]/50 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                           <FaLinkedinIn />
                        </div>
                     </Link>
                     <Link href="https://github.com/Kaehn23">
                        <div className="rounded-full shadow-lg shadow-[#0F0]/50 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                           <FaGithub />
                        </div>
                     </Link>
                     <div
                        className="rounded-full shadow-lg shadow-[#0F0]/50 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                        onClick={handleMailClick}
                     >
                        <AiOutlineMail />
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex justify-center py-8">
               <Link href="/">
                  <div className="rounded-full shadow-lg shadow-[#0F0]/50 p-6 cursor-pointer hover:scale-110 ease-in duration-700">
                     <LuArrowUp className="text-[#0F3]/50" size={30} />
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Contact;
