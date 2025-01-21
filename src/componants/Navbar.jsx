import { div } from "motion/react-client"
import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import { BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <a className="bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100" href="#home">Dev.ssh</a>
            <ul className="hidden md:flex gap-10">
                <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Home</li>
                </a>

                <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Tech</li>
                </a>

                <a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>projects</li>
                </a>

                <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                    <li>Contact</li>
                </a>
            </ul>

            {/* <ul className="hidden md:flex gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                    <BsYoutube />
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <BsLinkedin />
                </li>

                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <BsTwitter />
                </li>
            </ul> */}
            <a href="" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600">Download CV</a>


            {isOpen ? (
                <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
            ) : (
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            )}

            {isOpen && (
                <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p12 ${isOpen ? "block" : "hidden"}`} >
                    <ul className="flex flex-col gap-8">
                        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Home</li>
                        </a>

                        <a href="#Tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Tech</li>
                        </a>

                        <a href="#Projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>projects</li>
                        </a>

                        <a href="#Contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
                            <li>Contact</li>
                        </a>
                    </ul>

                    <ul className="flex flex-wrap gap-5">
                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-100">
                            <BsYoutube />
                        </li>

                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                            <BsLinkedin />
                        </li>

                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                            <BsTwitter />
                        </li>
                    </ul>
                </div>
            )
            }

        </nav >
    )
}

export default Navbar
