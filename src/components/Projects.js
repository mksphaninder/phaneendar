import React from "react"
import Github from "../Services/github/github"

function Projects() {
  let repos = Github.getRepos()
  return <div></div>
}

export default Projects
