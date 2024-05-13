import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import ProjectCard from './components/ProjectCards'
import pokedex from './assets/demo_pokedex.png'
import SiteUnderDevelopment from './components/SiteUnderDevelopment'

function App() {
  const [count, setCount] = useState(0)
  const github = "https://github.com/tomastormol/ReactNative-Pokedex"
  const demo = "https://snack.expo.dev/@turbi/7a2842?platform=ios"

  return (
    <>
      <Home />
      <SiteUnderDevelopment />
      {/* <ProjectCard title={"Test"} description={"Breve descripcion"} imageSrc={pokedex} githubLink={github} demoLink={demo} /> */}
    </>
  )
}

export default App
