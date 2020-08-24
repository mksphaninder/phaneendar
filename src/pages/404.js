import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../page-styles/404.css"
import { Button } from "react-bootstrap"
import { navigate } from "gatsby"
function ErrorPage() {
  const handleButtonClick = event => {
    navigate("/")
  }
  return (
    <div className="error-body">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-6 offset-lg-3 col-sm-6 offset-sm-3 col-12 p-3 error-main">
            <div class="row">
              <div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                <h1 class="m-0">404</h1>
                <h6>Page not found</h6>
                <p>
                  Sorry the page you are looking for cannot be found!
                  <span role="img" aria-label="sad">
                    😓
                  </span>
                </p>
                <Button onClick={handleButtonClick} variant="secondary">
                  Back to Homepage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
