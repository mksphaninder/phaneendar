import React from "react"
import { Col, Container, Row } from "react-bootstrap"

function SectionTitle(props) {
  return (
    <Container>
      <Row>
        <Col className="experience__title dark">
          <div className="d-flex justify-content-center">
            <h2 className="titillium-bold">{props.title}</h2>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionTitle
