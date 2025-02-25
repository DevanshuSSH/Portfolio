import image from "/ds.png.jpg"
import { motion } from "framer-motion"
const Hero = () => {
    return (
        <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
            <div className="flex flex-col items-center justify-center gap-10 text-white">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}>
                    <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5  hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]" />
                </motion.div>
                <motion.div initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}

                    className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent  text-5xl font-light md:text-7xl ">Devanshu</h1>
                    <h3 className="bg-gradient-to-r from-pink-500 to bg-blue-500 bg-clip-text text-transparent  text-2xl  md:text-3xl">Web Developer </h3>

                    <p className="md:text-base text-pretty text-sm text-gray-400">Hi, I'm Devanshu Sharma, I specialize in building responsive, high-performance websites.  I’ve honed my skills in HTML, CSS, JavaScript, and various modern frameworks.

                        I thrive on challenges and love solving problems, whether it’s optimizing a website’s performance, crafting intuitive user interfaces, or integrating complex backend systems. My goal is to deliver projects that not only meet but exceed client expectations. When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or tinkering with new web technologies. Let’s build something amazing together!</p>


                </motion.div>
            </div>
        </div>
    )
}

export default Hero
