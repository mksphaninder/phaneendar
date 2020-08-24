import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid"
import EmailIcon from "@material-ui/icons/Email"
import "./SocialMedia.css"

function SocialMedia({ linkedin, github, phone, email }) {
  return (
    <div className="d-flex justify-content-center socialMedia">
      <a href={linkedin}>
        <LinkedInIcon />
      </a>
      <a href={github}>
        <GitHubIcon />
      </a>
      <a href={phone}>
        <PhoneAndroidIcon />
      </a>
      <a href={email}>
        <EmailIcon />
      </a>
    </div>
  )
}

export default SocialMedia
