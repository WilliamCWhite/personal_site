import Header from "./components/Header"
import AboutSlide from "./components/AboutSlide"
import ProjectSlide from "./components/ProjectSlide"
import type { ProjectObj } from "./components/ProjectSlide"

import { motion, AnimatePresence } from "framer-motion"

import leftIcon from "./assets/icons/back.png"
import rightIcon from "./assets/icons/next.png"

// Import project data and create slides array
import project_data from "./assets/project_data.json"
import { useState } from "react"
const projects: ProjectObj[] = project_data.projects as ProjectObj[];

const projectSlides = projects.map((project: ProjectObj) => {
  return (
    <ProjectSlide project={project} />
  )
})
const slides = [
  <AboutSlide />,
  ...projectSlides
];


// Define Animations
const slideVariants = {
  // Incoming component: comes from Right (+1) or Left (-1)
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  // Active component: sits in the center
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  // Outgoing component: goes to Left (-1) or Right (+1)
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

function App() {

  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  // sets the page based on the direction, limited to constraints
  function changePage(direction: number) {
    if (page + direction < 0 || page + direction >= slides.length) {
      return
    }
    setPage([page + direction, direction]);
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="w-full px-2 flex flex-col justify-center">

{/* TODO: Add little dot widget that shows what page you're on */}
          <div className="gap-8 py-2 flex flex-row justify-center items-center">
            <div onClick={()=>changePage(-1)} className="flex justify-center items-center border border-ncomment rounded-full py-2 pl-1.5 pr-2.5">
              <img className="w-4 h-4" src={leftIcon}/>
            </div>
            <div onClick={()=>changePage(1)} className="flex justify-center items-center border border-ncomment rounded-full py-2 pl-2.5 pr-1.5">
              <img className="w-4 h-4" src={rightIcon}/>
            </div>
          </div>

          <section className="relative flex flex-col w-full">
            <AnimatePresence initial={false} custom={direction} >
              <motion.div
                key={page}           

                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={
                  {
                    x: { type: "spring", stiffness: 400, damping: 30 },
                    opacity: { duration: 0.2 }
                  }
                }
                className="absolute"
              >
                <div className="w-full flex justify-center items-center">
                  {slides[page]}
                </div>
              </motion.div>
            </AnimatePresence>
          </section>
        </div>

      </main>

    </div>
  )
}

export default App
