import { Hero, About, Projects, Contact, Experience, SideBar } from './components/sections'
import './App.css'

function App() {
    return (
        <main className="grid grid-cols-[10%_1fr_10%] xl:grids-cols-[15%_1fr_15%]">
            <div />
            <div >
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
            </div>
            <SideBar/>
        </main>
    )
}

export default App
