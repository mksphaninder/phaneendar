import React from "react"
import { Container, Row } from "react-bootstrap"
import "./SkillsContent.css"
function SkillsContent(props) {
  return (
    <Container>
      <Row className="skills__content__cards dark">
        <div className="col-md-4">
          <h3>Talk about web</h3>
        </div>
        <div className="col-md-4 ">
          <h3>Talk about Cloud</h3>
        </div>
        <div className="col-md-4 ">
          <h3>Talk about Dev ops</h3>
        </div>
      </Row>
    </Container>
  )
}

export default SkillsContent
