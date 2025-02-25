import { div, span } from "motion/react-client"

import { motion } from "framer-motion"

import React, { useState, useEffect } from "react"





const projectData = () => {

    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:ZPId3M6c/projects")
            .then(Response => Response.json())
            .then(data => setProjects(data))
        // .catch(error => console.error("error fatching user", error))
    }, []);
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            {/* <ScrollReveale> */}
            <h1 className="text-4xl font-light text-white md:text-6xl">my projects</h1>
            {/* </ScrollReveale> */}

            <div className="flex w-full max-w-[1000px] gap-16 text-white justify-center items-center">
                {
                    projects.map((project, index) => (
                        // <div className="text-xl font-semibold">{project.name}</div>
                        <ProjectCard key={index} project={project} />
                    ))

                }
            </div>
        </div>

    )
}



const ScrollReveale = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    )
}

const ProjectCard = ({ project }) => {
    const [showDescription, setShowDescription] = useState(false);

    const handleButtonClick = () => {
        setShowDescription(!showDescription);
    };
    return (

        <ScrollReveale>
            {/* <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                <img src={project.project_image.url} alt="" className="w-full cursor-pointer rounded-2xl  transition-all duration-300 hover:scale-105 md:w-[300px]" />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-semibold">{project.name}</div>
                        <p className="text-gray-400"> {project.Details}  </p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {
                            project.skills.map((tech, index) => (
                                <span key={index} className="rounded-lg bg-black p-3">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div> */}
            {/* <div class="flex">
                <div class=" content-center justify-center items-center flex-col cursor-pointer group relative flex  my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300 ">
                    <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img class="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                            src={project.project_image.url} alt="investment-seed-round" />
                    </div>
                    <div class="p-4">
                        <h6 class="mb-2 text-slate-800 text-xl text-center font-semibold">
                            {project.name}
                        </h6>
                    </div>
                    <div class="px-4 pb-4 pt-0 mt-2 text-center">
                        <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button" >
                            View Details
                        </button>
                    </div>
                </div>
            </div> */}




            <div
                className="card overflow-scroll  justify-center  items-center block rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 h-[300px] w-[300px] ">
                <a href="#!">
                    <img
                        className="rounded-lg"
                        src={project.project_image.url}
                        alt="" />
                </a>
                <div className="p-6 ">
                    <h5
                        className="mb-2 text-xl font-medium leading-tight text-white dark:text-neutral-50 text-center">
                        {project.name}
                    </h5>
                    <p className="mb-4 block text-base text-neutral-600 dark:text-neutral-200">

                    </p>
                    <div className="flex flex-col justify-center items-center">
                        <button
                            type="button"
                            className=" inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
                            onClick={handleButtonClick}>
                            {showDescription ? 'Hide Details' : 'Show Details'}

                        </button>
                        {showDescription && (
                            <p className="text-gray-400 mt-2 text-start "> {project.Details}  </p>
                        )}
                    </div>
                </div>
            </div>

            {/* <div class="relative flex flex-col my-6 bg-transparent border- rounded-lg w-96 ">
                <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                    <img src={project.project_image.url} alt="card-image" />
                </div>
                <div class="p-4 ">
                    <h6 class="mb-2 text-black text-xl font-semibold">
                        {project.name}
                    </h6>
                    <p class="text-slate-600 leading-normal font-light">

                    </p>
                </div>
                <div class="px-4 pb-4 pt-0 mt-2 justify-center items-center">
                    <button class="rounded-md bg-black py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " type="button">
                        View Details
                    </button>
                </div>
            </div> */}

        </ScrollReveale>
    )
}

// const projectData = () => {

//     return (
//         <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
//             <ScrollReveale>
//                 <h1 className="text-4xl font-light text-white md:text-6xl">my projects</h1>
//             </ScrollReveale>

//             <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
//                 {
//                     myprojects.map((project, index) => (
//                         <ProjectCard key={index} project={project} />
//                     ))

//                 }
//             </div>
//         </div>

//     )
// }



export default projectData
