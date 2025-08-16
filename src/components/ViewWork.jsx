import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Landing Page Design",
    description: "A modern landing page for a tech startup, fully responsive.",
    image:
      "https://images.unsplash.com/photo-1542744095-0d53267d353e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "E-commerce Dashboard",
    description: "Interactive admin dashboard with charts and analytics.",
    image:
      "https://img.freepik.com/free-vector/user-panel-business-dashboard_23-2148359901.jpg?t=st=1755331815~exp=1755335415~hmac=a622116592c43f93578cbf55d001268f8142e255e07b3d0cf995fb255155addb&w=1060",
  },
  {
    title: "Mobile App UI",
    description: "A sleek and user-friendly UI design for a mobile app.",
    image:
      "https://img.freepik.com/free-vector/medical-booking-app-concept_23-2148578849.jpg?t=st=1755331901~exp=1755335501~hmac=742aeef60dcc5bbdb845da14530d78d489dda7dbe7cb3a079b47f2d524bf5296&w=1060",
  },
  {
    title: "Portfolio Website",
    description: "Creative portfolio website with smooth animations.",
    image: "https://img.freepik.com/free-photo/top-view-work-desk-with-drawing-pad-glasses-with-copy-space_23-2148397874.jpg?t=st=1755332316~exp=1755335916~hmac=9e67a1b8f99ce0a11cd4781dbeb4fe5793c1d0e3b917982cff9ca85e1d24d07d&w=1060",
  },
];
const ViewWork = () => {
  return (
    <section id="projects" className="py-16  min-h-screen w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Work</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewWork;
