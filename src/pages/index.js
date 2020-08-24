import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "../components/Navigation"
import Intro from "../components/Intro"
import About from "../components/About"
import "../page-styles/index.css"
import Experience from "../components/Experience"
import { ProjectProvider } from "../context/projectContext"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  const data = require("../data/data.json")
  return (
    <>
      <Navigation />
      <Intro name={data.name} />
      <About description={data.about} />
      <ProjectProvider>
        <Experience projects={data.projects} />
      </ProjectProvider>
      <Contact info={data.contact} />
      <Footer />
    </>
  )
}
