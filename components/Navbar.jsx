"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
   const [nav, setNav] = useState(false);
   const [shadow, setShadow] = useState(false);
   const [navBg, setNavBg] = useState('#ecf0f3');
   const [linkColor, setLinkColor] = useState('#1f9237')
   const router = useRouter()

// NavBar route color setting
   useEffect(() => {
      if (
         router.pathname === "/novaterim" ||
         router.pathname === "/portfolio" 
      ) {
         setNavBg('transparent')
         setLinkColor('#ecf0f3')
      } else {
         setNavBg('#ecf0f3')
         setLinkColor('#000000')
      }
   },[router])

   const handleNav = () => {
      setNav(!nav);
   };

   const handleMailClick = () => {
      window.location.href = "mailto:jeremy.iparraguirre@gmail.com";
   };

   useEffect(() => {
      const handleShadow = () => {
         if (window.scrollY >= 90) {
            setShadow(true);
         } else {
            setShadow(false);
         }
      };
      window.addEventListener("scroll", handleShadow);
   }, []);

  

   return (
      <div 
      style = {{backgroundColor: `${navBg}`}}
         
         className={
            shadow
               ? "fixed w-full h-20 shadow-xl z-[100] shadow-transition"
               : "fixed w-full h-20 z-[100] "               
         }
      >
         <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Link href="/">
               <Image
               
                  src="/assets/navLogo.png"
                  alt="a logo"
                  width="40"
                  height="50"
               />
            </Link>
            <div className="mr-4">
               <ul 
               style={{color: `${linkColor}`}} className="hidden md:flex">
                  <Link href="/">
                     <li className="ml-10 text-sm uppercase hover:border-b hover:border-gray-500">
                     Accueil
                     </li>
                  </Link>
                  <Link href="/#about">
                     <li className="ml-10 text-sm uppercase hover:border-b hover:border-gray-500">
                     À propos
                     </li>
                  </Link>
                  <Link href="/#skills">
                     <li className="ml-10 text-sm uppercase hover:border-b hover:border-gray-500">
                        Technologies
                     </li>
                  </Link>
                  <Link href="/#projects">
                     <li className="ml-10 text-sm uppercase hover:border-b hover:border-gray-500">
                        Projets
                     </li>
                  </Link>
                  <Link href="/#contact">
                     <li className="ml-10 text-sm uppercase hover:border-b hover:border-gray-500">
                        Contact
                     </li>
                  </Link>
               </ul>
               <div onClick={handleNav} className="md:hidden">
                  <AiOutlineMenu size={25} />
               </div>
            </div>
         </div>

         <div
            className={
               nav
                  ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50"
                  : ""
            }
         >
            <div
               className={
                  nav
                     ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-300"
                     : "fixed left-[-100%] top-0 p-10 ease-in duration-300"
               }
            >
               <div>
                  <div className="flex w-full items-center justify-between">
                     <Image
                        src="/assets/navLogo.png"
                        alt="a logo"
                        width="40"
                        height="20"
                     />
                     <div
                        onClick={handleNav}
                        className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  "
                     >
                        <AiOutlineClose size={25} />
                     </div>
                  </div>
                  <div className="border-b border-gray-300 my-4">
                     <p className="w-[85%] md:w-[90%] py-4">
                        {" "}
                        Construisons ensemble{" "}
                     </p>
                  </div>
               </div>
               <div className="py-2 flex flex-col">
                  <ul className="uppercase">
                     <Link href="/">
                        <li
                           onClick={() => setNav(false)}
                           className="py-2 text-sm "
                        >
                           Accueil
                        </li>
                     </Link>
                     <Link href="/#about">
                        <li
                           onClick={() => setNav(false)}
                           className="py-2 text-sm"
                        >
                           À propos
                        </li>
                     </Link>
                     <Link href="/#skills">
                        <li
                           onClick={() => setNav(false)}
                           className="py-2 text-sm"
                        >
                           Technologies
                        </li>
                     </Link>
                     <Link href="/#projects">
                        <li
                           onClick={() => setNav(false)}
                           className="py-2 text-sm"
                        >
                           Projets
                        </li>
                     </Link>
                     <Link href="/#contact">
                        <li
                           onClick={() => setNav(false)}
                           className="py-2 text-sm"
                        >
                           Contact
                        </li>
                     </Link>
                  </ul>
                  <div className="pt-40 ">
                     <p className="uppercase tracking-widest text-[#9ebb5f]">
                        Contactez moi
                     </p>
                     <div className="flex items-center justify-between my-3 w-full sm:w-[60%] ">
                        <Link href="https://www.linkedin.com/in/iparraguirre-jeremy-3b391a2a3/">
                           <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                              <FaLinkedinIn size={25} />
                           </div>
                        </Link>
                        <Link href="https://github.com/Kaehn23">
                           <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                              <FaGithub size={25} />
                           </div>
                        </Link>
                        <div
                           className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                           onClick={handleMailClick}
                        >
                           <AiOutlineMail size={25} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
