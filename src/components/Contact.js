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
          <ContactPhoneIcon /> <span>{info.phone}</span>
        </span>
        <span className="email">
          <EmailIcon /> <span>{info.email}</span>
        </span>
      </div>
    </div>
  )
}

export default Contact
