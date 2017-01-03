import axios from 'axios'

const HomeApi = {
  getHome() {
    return axios.get('/home')
  }
}

export default HomeApi;
