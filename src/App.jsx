import Navbar from "./componants/Navbar"
import Hero from "./componants/Hero"
import Tech from "./componants/Tech"
import Projects from "./componants/Projects"
import Contact from "./componants/Contact"

function App() {


  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
