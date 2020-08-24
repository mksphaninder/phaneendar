import React from "react"
import { Row } from "react-bootstrap"
import ProjectsList from "./ProjectsList"
import ProjectContent from "./ProjectContent"

function Projects({ projects }) {
  return (
    <Row>
      <ProjectsList projects={projects} />
      <ProjectContent />
    </Row>
  )
}

export default Projects
