import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Contact.css"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"
import EmailIcon from "@material-ui/icons/Email"
function Contact({ info }) {
  return (
    <div className="contact ">
      <Container>
        <Row>
          <Col md={6}>
            <div className="contact__info">
              <span>photo</span>
            </div>
          </Col>
          <Col md={6}>
            <div className="contact__info details d-flex align-items-center flex-column ">
              <p>
                <ContactPhoneIcon /> <span>{info.phone}</span>
              </p>
              <p>
                <EmailIcon /> <span>{info.email}</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
