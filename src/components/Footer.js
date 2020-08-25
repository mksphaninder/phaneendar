import React from "react"
import "./Footer.css"
import data from "../data/data.json"
import Contact from "./Contact"
import { Container, Row, Col } from "react-bootstrap"
function Footer() {
  return (
    <div className="footer d-flex align-items-center justify-content-center flex-column">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <span>
              Developed by Phaneendar with the help of Gatsby.js, (Site still
              under construction) 🔥
            </span>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Contact info={data.contact} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
