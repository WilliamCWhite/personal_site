import Header from "./components/Header"

import leftIcon from "./assets/icons/back.png"
import rightIcon from "./assets/icons/next.png"

function App() {

  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center">

          <div className="flex flex-row justify-center items-center py-2">
            <div className="flex justify-center items-center border border-ncomment rounded-full py-2 pl-1.5 pr-2.5">
              <img className="w-6 h-6" src={leftIcon}/>
            </div>
          </div>

          <section className="flex flex-col">

          </section>

          <div className="flex flex-row justify-center items-center py-2">
            <div className="flex justify-center items-center border border-ncomment rounded-full py-2 pl-2.5 pr-1.5">
              <img className="w-6 h-6" src={rightIcon}/>
            </div>

          </div>

        </div>

      </main>

    </div>
  )
}

export default App
