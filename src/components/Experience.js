import React from "react"
import { Row, Container, Col } from "react-bootstrap"
import "./Experience.css"
import Projects from "../partial-components/Projects"
import SectionTitle from "../partial-components/SectionTitle"

function Experience({ projects }) {
  return (
    <div className="experience">
      <Container>
        <SectionTitle title={"Work Experience"} />
        <Projects projects={projects} />
      </Container>
    </div>
  )
}

export default Experience
