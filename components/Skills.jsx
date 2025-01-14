import React from "react";
import Image from "next/image";
import backgroundImage from "/public/assets/bg3.png";

function Skills() {
   return (
      <div id="skills" className="w-full lg:h-screen bg-center bg-no-repeat "
      style={{
         backgroundImage: `url(${backgroundImage.src})`,
      }}>
         <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#0F3] px-12 gl">
               {" "}
               Technologies
            </p>
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative py-2 ">
               <div className="p-6 shadow-xl custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
                  <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                     <div className="m-auto ">
                        <Image
                           src="/assets/skills/html.png"
                           width={64}
                           height={64}
                           alt="HTML Logo"
                        />
                     </div>
                     <div className="flex flex-col items-center justify-center ">
                        <h3>HTML</h3>
                     </div>
                  </div>
               </div>

               <div className="p-6 shadow-xl custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl  custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl  custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl custom-shadow-white  rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl custom-shadow-white  rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
               <div className="p-6 shadow-xl custom-shadow-white rounded-xl hover:scale-105 ease-in duration-300 bg-[#0F3]/50">
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
