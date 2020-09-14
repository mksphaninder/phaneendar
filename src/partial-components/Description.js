import React from "react"
import "./Description.css"

function Description(props) {
  // This element should contain Title of the section
  // and description
  // Description font can be bold or lig ht depending on the section
  //
  return (
    <div className="description">
      <div className="description__title ">
        <h2>About Phaneendar</h2>
      </div>
      <div className="description__content"></div>
    </div>
  )
}

export default Description
