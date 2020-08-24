import React from "react"
import "./Intro.css"
import { Container, Row, Col } from "react-bootstrap"
import SocialMedia from "../partial-components/SocialMedia"
function Intro({ name }) {
  return (
    <div className="intro intro__hero-image">
      {/* Should contain a background image */}
      <Container className="intro__content">
        <Row>
          <Col className="d-flex justify-content-center intro__content">
            <h1>Hello I'm {name}, nice to meet you!</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 3 }} className="d-flex justify-content-center">
            <SocialMedia
              linkedin={"https://www.linkedin.com/in/mksp45419/"}
              github={"https://github.com/mksphaninder"}
              phone={"tel:6143838184"}
              email={"mailto:phaneendarm@gmail.com"}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
