'use client'
import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {

    const handleMailClick = () => {
        window.location.href = "mailto:jeremy.iparraguirre@gmail.com";
    };

   return (
      <div id="home" className="w-full h-screen text-center">
         <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
               <p className="uppercase text-sm tracking-widest text-gray-600 my-10">
                  Construisons ensemble
               </p>
               {/* Image de profil */}
               <img
                  src="/assets/profilepic3.png"
                  alt="Votre Nom"
                  className="rounded-full shadow-xl shadow-gray-800 hover:scale-110 ease-in duration-500 mx-auto my-4"
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
               />
               <h1 className="py-4 text-gray-600">
                  {" "}
                  Hey, je suis  <span className="text-[#9ebb5f]"> Jeremy.</span>
               </h1>
               <h1 className=" text-gray-600">Un developper full stack !</h1>
               <p className="py-4 text-gray-500 max-w-[70] m-auto">
                  Je suis passionné par le developpement web & mobile, et toujours à la recherche de nouveaux challenges et opportunités !  
               </p>
               <a className="py-2 text-2xl underline " href="resume">
                  Consultez mon CV !
               </a>
               <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <Link href="https://www.linkedin.com/in/iparraguirre-jeremy-3b391a2a3/">
                     <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                     </div>
                  </Link>
                  <Link href="https://github.com/Kaehn23">
                     <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                     </div>
                  </Link>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  onClick={handleMailClick}>
                     <AiOutlineMail />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Main;
