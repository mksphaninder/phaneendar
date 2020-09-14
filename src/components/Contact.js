import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Contact.css"
import ContactPhoneIcon from "@material-ui/icons/ContactPhone"
import EmailIcon from "@material-ui/icons/Email"
function Contact({ info }) {
  return (
    <div className="contact ">
      <div className="contact__info__details d-flex justify-content-between">
        <span className="phone">
          <a href={`tel:${info.phone}`}>
            <ContactPhoneIcon /> <span>{info.phone}</span>
          </a>
        </span>
        <span className="email">
          <a href={`mailto:${info.email}`}>
            <EmailIcon /> <span>{info.email}</span>
          </a>
        </span>
      </div>
    </div>
  )
}

export default Contact
