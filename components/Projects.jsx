"use client";
import React from "react";
import { useState } from "react";
import ProjectItems from "./ProjectItems";
import novaterimCard from "../public/assets/projects/novaterimCard.png";
import portfolioCard from "../public/assets/projects/portfolioCard.png";

const Projects = () => {
   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

   const handleOpenDrawer = () => {
      setIsDrawerOpen(true);
   };

   return (
      <div
         id="projects"
         className="w-full md:h-screen p-2 flex items-center py-8"
      >
         <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="text-xl tracking-widest uppercase text-[#9ebb5f] px-12">
               Projects
            </p>
            <h2 className="py-4 ">What I've Done</h2>
            <div className="grid h md:grid-cols-2 gap-8">
               <ProjectItems
                  title="NovaTerim Mobile App"
                  altText="NovaTerim Mobile App"
                  backgroundImg={novaterimCard}
                  projectUrl="/novaterim"
                  technoUsed="React Native / Expo / MongoDB"
               />
               <ProjectItems
                  title="My Portfolio"
                  altText="My Portfolio"
                  backgroundImg={portfolioCard}
                  projectUrl="/portfolio"
                  technoUsed="React / NextJS / TailwindCSS "
               />
            </div>
         </div>
      </div>
   );
};

export default Projects;
