import React, { useContext } from "react"
import "./ProjectsList.css"
import { ProjectContext } from "../context/projectContext"

function ProjectsList({ projects }) {
  const { currentProject, setCurrentProject } = useContext(ProjectContext)

  const handleProjectItemClick = project => {
    setCurrentProject(data => ({ ...data, ...project }))
  }
  return (
    <div className="col-md-4 projects__list">
      <ul className="list-group">
        {projects &&
          projects.map(p => {
            return (
              <li
                className={
                  p.id === currentProject.id
                    ? `projects__list__item list-group-item selected`
                    : `projects__list__item list-group-item`
                }
                key={p.id}
                onClick={() => handleProjectItemClick(p)}
              >
                {p.title}
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default ProjectsList
