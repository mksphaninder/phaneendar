import React from "react"
import { Row, Container, Col } from "react-bootstrap"
import "./Experience.css"
import Projects from "../partial-components/Projects"

function Experience({ projects }) {
  return (
    <div className="experience">
      <Container>
        <Row>
          <Col>
            <div className="experience__title d-flex justify-content-center">
              <h2>Work Experience</h2>
            </div>
          </Col>
        </Row>
        <Projects projects={projects} />
      </Container>
    </div>
  )
}

export default Experience
