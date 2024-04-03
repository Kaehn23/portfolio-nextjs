import React from "react";
import Image from "next/image";

function Skills() {
   return (
      <div id='skills' className="w-full lg:h-screen ">
         <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#9ebb5f] px-12 ">
               {" "}
               Technologies
            </p>
            <h2 className="py-4"> Ce que j'utilise : </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/html.png"
                           width={64}
                           height={64}
                           alt="HTML Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>HTML</h3>
                     </div>
                  </div>
               </div>

               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/css.png"
                           width={64}
                           height={64}
                           alt="CSS Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>CSS</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/javascript.png"
                           width={64}
                           height={64}
                           alt="javascript Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>JavaScript</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/typescript.png"
                           width={64}
                           height={64}
                           alt="TypeScript Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>TypeScript</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/react.png"
                           width={64}
                           height={64}
                           alt="React Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>React + ReactNative</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/redux.png"
                           width={64}
                           height={64}
                           alt="Redux Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>Redux</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/tailwind.png"
                           width={64}
                           height={64}
                           alt="TailWind Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>TailWind CSS</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/nextjs.png"
                           width={64}
                           height={64}
                           alt="NextJS Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>Next.JS</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/node.png"
                           width={64}
                           height={64}
                           alt="Node Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>Node</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/mongo.png"
                           width={64}
                           height={64}
                           alt="MongoDB Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>MongoDB</h3>
                     </div>
                  </div>
               </div>
               <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/github1.png"
                           width={64}
                           height={64}
                           alt="GitHub Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center">
                        <h3>GitHub</h3>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skills;
