import { div, span } from "motion/react-client"
import image1 from "/1.png"
import image2 from "/2.png"
import image3 from "/3.png"
import image4 from "/4.png"
import image5 from "/5.png"
import { motion } from "framer-motion"
import { Children } from "react"

const projectData = [
    {
        image: image1,
        tittle: "habit tacker",
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
        technologies: ["html", "css", "javascript", "mysql"],
    },
    {
        image: image2,
        tittle: "portfolio",
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
        technologies: ["html", "css", "javascript", "mysql"],
    },
    {
        image: image3,
        tittle: "socialMedia app",
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
        technologies: ["html", "css", "javascript", "mysql"],
    },
    {
        image: image4,
        tittle: "todo app",
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
        technologies: ["html", "css", "javascript", "mysql"],
    },
    {
        image: image5,
        tittle: "tic tac to",
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit veritatis libero cumque quidem labore numquam delectus dolorem sit odit asperiores.",
        technologies: ["html", "css", "javascript", "mysql"],
    },
]

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
        <ScrollReveale>
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl  transition-all duration-300 hover:scale-105 md:w-[300px]" />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <div className="text-xl font-semibold">{project.tittle}</div>
                        <p className="text-gray-400"> {project.description}  </p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {
                            project.technologies.map((tech, index) => (
                                <span key={index} className="rounded-lg bg-black p-3">
                                    {tech}
                                </span>
                            ))
                        }
                    </div>
                </div>
            </div>
        </ScrollReveale>
    )
}

const Projects = () => {
    return (
        <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            <ScrollReveale>
                <h1 className="text-4xl font-light text-white md:text-6xl">my projects</h1>
            </ScrollReveale>

            <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
                {
                    projectData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))
                }
            </div>
        </div>

    )
}

export default Projects
