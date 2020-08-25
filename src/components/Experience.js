import React from "react"
import { Row, Container, Col } from "react-bootstrap"
import "./Experience.css"
import Projects from "../partial-components/Projects"

function Experience({ projects }) {
  return (
    <div className="experience">
      <Container>
        <Row>
          <Col className="experience__title dark">
            <div className="d-flex justify-content-center">
              <h2 className="titillium-bold">Work Experience</h2>
            </div>
          </Col>
        </Row>
        <Projects projects={projects} />
      </Container>
    </div>
  )
}

export default Experience
