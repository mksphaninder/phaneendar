import Axios from "axios"
class Github {
  getRepos() {
    // GET /users/:username/repos
    Axios.get("/user/mksphaninder/repos")
      .then(repo => console.log(repo))
      .catch(err => console.log(err))
  }
}

export default new Github()
