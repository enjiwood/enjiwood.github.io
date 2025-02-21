import { useState } from 'react'
import { Hero, About, Projects, Contact, Experience } from './components'
import './App.css'

function App() {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}

export default App
