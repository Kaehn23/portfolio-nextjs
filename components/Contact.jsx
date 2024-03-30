"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
   const handleMailClick = () => {
      window.location.href = "mailto:jeremy.iparraguirre@gmail.com";
   };

   return (
      <div id="contact" className="w-full lg:h-screen p2 py-16">
         <div className="max-w-[1240px] m-auto px-2 py-8 w-full">
            <p className="text-xl tracking-widest uppercase text-[#9ebb5f] px-12">
               Contact me
            </p>
            <h2 className="py-4">Get In Touch!</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
               {/* Image Section */}
               <div className="w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                  <div className="h-full rounded-xl py-4">
                     <img
                        className="rounded-xl hover:scale-105 ease-in duration-300"
                        src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width={400}
                        alt=""
                     />
                     <div>
                        <h2 className="p-4">Jérémy Iparraguirre</h2>
                        <p>Fullstack Developper</p>
                        <p className="py-4 ">
                           I'm currently looking for an intership,{" "}
                           <span className="font-bold">
                              from 3 to 6 months,
                           </span>{" "}
                           to strenghten and upgrade my knowledge!
                        </p>
                        <p>I'm also open for freelance missions.</p>
                     </div>
                     <div className="pt-8 underline">Connect With Me :</div>
                     <div className="flex items-center justify-between py-8 mx-10">
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
                        <div
                           className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                           onClick={handleMailClick}
                        >
                           <AiOutlineMail />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Form Section */}
               <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4">
                  <div className="p-4">
                     <form>
                        <div className="grid grid-cols-1 gap-4 w-full py-2">
                           <div className="flex flex-col">
                              <label className="uppercase text-sm py-2">
                                 Name
                              </label>
                              <input
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 type="text"
                              />
                           </div>
                           <div className="flex flex-col">
                              <label className="uppercase text-sm py-2">
                                 Phone Number
                              </label>
                              <input
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 type="text"
                              />
                           </div>
                           <div className="flex flex-col">
                              <label className="uppercase text-sm py-2">
                                 Email
                              </label>
                              <input
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 type="email"
                              />
                           </div>
                           <div className="flex flex-col">
                              <label className="uppercase text-sm py-2">
                                 Subject
                              </label>
                              <input
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 type="text"
                              />
                           </div>
                           <div className="flex flex-col">
                              <label className="uppercase text-sm py-2">
                                 Message
                              </label>
                              <textarea
                                 className="border-2 rounded-lg p-3 flex border-gray-300"
                                 rows="5"
                              />
                           </div>
                        </div>
                        <button className="w-full p-4 text-gray-700 font-bold mt-4">
                           Send Message
                        </button>
                     </form>
                  </div>
               </div>
            </div>
            <div className="flex justify-center py-8">
               <Link href="/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-700">
                     <HiOutlineChevronDoubleUp
                        className="text-[#9ebb5f]"
                        size={30}
                     />
                  </div>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Contact;
