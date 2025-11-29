import Header from "./components/Header"
import AboutSlide from "./components/AboutSlide"

import leftIcon from "./assets/icons/back.png"
import rightIcon from "./assets/icons/next.png"

function App() {

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="px-2 flex flex-col justify-center">

          <div className="gap-8 py-2 flex flex-row justify-center items-center">
            <div className="flex justify-center items-center border border-ncomment rounded-full py-2 pl-1.5 pr-2.5">
              <img className="w-4 h-4" src={leftIcon}/>
            </div>
            <div className="flex justify-center items-center border border-ncomment rounded-full py-2 pl-2.5 pr-1.5">
              <img className="w-4 h-4" src={rightIcon}/>
            </div>
          </div>

          <section className="flex flex-col">
            <AboutSlide />
          </section>
        </div>

      </main>

    </div>
  )
}

export default App
