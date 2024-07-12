"use client";
import React from "react";
import { LuArrowUp } from "react-icons/lu";


const ScrollToTop = () => {
    

   const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <div
         className="hidden md:block fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 cursor-pointer"
         onClick={handleScrollToTop}
      >
         <LuArrowUp
            className=" w-12 h-12 md:w-16 md:h-16  shadow-lg  duration-300 text-[#0F3]/50 shadow-[#0F0]/50 glass-effect"
            size={15}
         />
      </div>
   );
};

export default ScrollToTop;
