import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./About.css"
function About({ description }) {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col className="about__box dark">
            <div className="d-flex justify-content-center about__title ">
              <h2 className="titillium-bold">ABOUT ME</h2>
            </div>
            <div className="about__content titillium-regular d-flex justify-content-center">
              <p>{description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
