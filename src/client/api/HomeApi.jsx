import axios from 'axios'

const HomeApi = {
  getHome() {
    return axios.get('/api/home')
  }
}

export default HomeApi;
