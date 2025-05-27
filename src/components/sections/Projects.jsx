import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Feature Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                <h3 className="text-gray-400 mb-4">Fleet Managment System </h3>
                <p>
                   Developed a comprehensive Fleet Management System designed to help organizations efficiently monitor, manage, and optimize their vehicle fleets. The system provides real-time vehicle tracking, maintenance scheduling, driver management, and analytics dashboards to improve fleet utilization and reduce operational costs.
                </p>
                <div>
                    {["React" , "Node.js" ,"Postgres","leaflet"].map((tech,key)=>{
                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                        </span>
                    })}
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                <h3 className="text-gray-400 mb-4">NavXperience</h3>
                <p>
                    NavXperience” is an interactive web application focused on path navigation and real-time visualization of LIDAR data. The application allows users to design navigation paths on a map interface, visualize sensor (LIDAR) data overlays, and interact with dynamic spatial information for enhanced situational awareness.
                </p>
                <div>
                    {["React" , "Node.js" ,"Postgres","leaflet"].map((tech,key)=>{
                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                        </span>
                    })}
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                <h3 className="text-gray-400 mb-4">Pizza delivery app </h3>
                <p>
                    Developed a full-featured Pizza Delivery web application that allows customers to browse menus, place orders, customize pizzas, and securely pay online using Razorpay. The application manages user authentication, order tracking, and admin dashboards for managing inventory and orders.
                </p>
                <div>
                    {["React" , "Node.js" ,"Postgres","leaflet"].map((tech,key)=>{
                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                        </span>
                    })}
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                <h3 className="text-gray-400 mb-4">Blog app</h3>
                <p>
                    Developed a robust Blog Application that allows users to create, read, update, and delete blog posts while managing user authentication and comments. The platform supports rich text editing, user profiles, and responsive design for seamless access across devices.
                </p>
                <div>
                    {["React" , "Node.js" ,"Postgres","leaflet"].map((tech,key)=>{
                        <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'>
                                {tech}
                        </span>
                    })}
                </div>
                <div className="flex justify-between items-center">
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                </div>
            </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
