import React, { createContext, useState } from "react"
import data from "../data/data.json"
const ProjectContext = createContext()

const ProjectProvider = props => {
  const [currentProject, setCurrentProject] = useState({
    id: data.projects[0].id,
    title: data.projects[0].title,
    role: data.projects[0].role,
    from: data.projects[0].from,
    to: data.projects[0].to,
    description: data.projects[0].description,
    content: data.projects[0].content,
  })
  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
      {props.children}
    </ProjectContext.Provider>
  )
}

export { ProjectContext, ProjectProvider }
