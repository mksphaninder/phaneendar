import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from "../partial-components/SectionTitle"
import SkillsContent from "../partial-components/SkillsContent"
import "./Skills.css"

function Skills(props) {
  return (
    <div className="skills">
      <SectionTitle title={"Skills"} />
      <div className="skills__content">
        <SkillsContent skills={props.skills} />
      </div>
    </div>
  )
}

export default Skills
