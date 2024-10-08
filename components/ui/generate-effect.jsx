"use client";
import { cn } from "@/utils/cn";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";


export const TextGenerateEffect = ({
   words,
   className,
   filter = true,
   duration = 0.5,
}) => {
   const [scope, animate] = useAnimate();
   let wordsArray = words.split(" ");
   useEffect(() => {
      animate(
         "span",
         {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
         },
         {
            duration: duration ? duration : 0.52,
            delay: stagger(0.2),
         }
      );
   }, [scope.current]);

   const renderWords = () => {
      return (
         <motion.div ref={scope}>
            {wordsArray.map((word, idx) => {
               return (
                  <motion.span
                     key={word + idx}
                     className="dark:text-white text-white opacity-0"
                     style={{
                        filter: filter ? "blur(10px)" : "none",
                     }}
                  >
                     {word}{" "}
                  </motion.span>
               );
            })}
         </motion.div>
      );
   };

   return (
      <div className={cn("font-bold", className)}>
         <div className="mt-4">
            <div className=" dark:text-white text-white text-md leading-snug tracking-wide">
               {renderWords()}
            </div>
         </div>
      </div>
   );
};
