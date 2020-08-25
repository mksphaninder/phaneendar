import React from "react"
import "./Intro.css"
import { Container, Row, Col } from "react-bootstrap"
import SocialMedia from "../partial-components/SocialMedia"
function Intro({ name, roles }) {
  return (
    <div className="intro intro__hero-image">
      {/* Should contain a background image */}
      <Container className="intro__content">
        {/* name should be small */}
        {/* about me should be black and large font ex: software engineer */}
        {/* border on the bottom */}
        {/* and then there should be social media */}
        <Row>
          <Col className="d-flex justify-content-center">
            <div className="intro__content__name ">
              <span>{name}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="intro__content__roles d-flex justify-content-center">
              <ul className="intro__content__roles__list">
                {roles.map(role => (
                  <li className="intro__content__roles__list__item titillium-black d-flex justify-content-center">
                    {role.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
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
