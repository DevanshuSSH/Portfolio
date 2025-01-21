import { div, span } from "motion/react-client"
import image1 from "/1.png"
import image2 from "/2.png"
import image3 from "/3.png"
import image4 from "/4.png"
import image5 from "/5.png"
import { motion } from "framer-motion"
import { Children } from "react"
import React, { useState, useEffect } from "react"

// const projectData = [
//     {
//         image: image1,
//         tittle: "Portfolio",
//         description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
//         technologies: ["ReactJs", "Tailwind Css", "MongoDb", "vite"],
//     },
//     {
//         image: image2,
//         tittle: "portfolio",
//         description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
//         technologies: ["html", "css", "javascript", "mysql"],
//     },
//     {
//         image: image3,
//         tittle: "socialMedia app",
//         description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
//         technologies: ["html", "css", "javascript", "mysql"],
//     },
//     {
//         image: image4,
//         tittle: "todo app",
//         description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
//         technologies: ["html", "css", "javascript", "mysql"],
//     },
//     {
//         image: image5,
//         tittle: "tic tac to",
//         description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
//         technologies: ["html", "css", "javascript", "mysql"],
//     },
// ]

// const projectData = () => {
//     let API = "https://x8ki-letl-twmt.n7.xano.io/api:ZPId3M6c"
//     const fetchApiData = async (url) => {
//         try {
//             const res = await fetch(url)
//             const data = await res.json()
//             console.log(data);

//         } catch (error) {
//             console.log(error);

//         }
//     }


//     useEffect(() => {
//         fetchApiData(API);
//         return () => {

//         }
//     }, [])

// }
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

            <div className="flex w-full max-w-[1000px] gap-16 text-white">
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

    return (
        // <div className="text-xl font-semibold">{project.name}</div>
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
            <div class="flex">
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
            </div>


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
