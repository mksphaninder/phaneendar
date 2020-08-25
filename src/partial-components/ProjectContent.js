import React, { useContext } from "react"
import "./ProjectContent.css"
import { ProjectContext } from "../context/projectContext"

function ProjectContent() {
  // subscribe to the context
  const { currentProject } = useContext(ProjectContext)

  return (
    <div className="col-md-8 project__content dark">
      <div className="project__content__details d-flex justify-content-between">
        <div className="project__content__details__role">
          <span>{currentProject.role}</span>
        </div>
        <div className="project__content_details__dates">
          <span>From: {currentProject.from}</span>{" "}
          <span>To: {currentProject.to}</span>
        </div>
      </div>
      <h2 className="h3 d-flex justify-content-center">Description</h2>
      <p>{currentProject.description}</p>
      <h2 className="h3 d-flex justify-content-center">Responsibilities</h2>
      <ul className="list-group list-group-flush">
        {currentProject.content &&
          currentProject.content.map(r => (
            <li className="list-group-item dark">{r}</li>
          ))}
      </ul>
    </div>
  )
}

export default ProjectContent
