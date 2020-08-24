import React from "react"
import "./Navigation.css"
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom"
import { Navbar, Nav } from "react-bootstrap"
function Navigation() {
  return (
    <>
      <div className="navigation">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <MeetingRoomIcon /> <span>Phaneendar</span>
          </Navbar.Brand>
          <Nav className="flex-row-reverse mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  )
}

export default Navigation
