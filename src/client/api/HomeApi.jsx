import axios from 'axios'
import mock from '../api/mock/MockAdapter'

const HomeApi = {
  getHome() {
    mock.restore()
    return axios.get('/home')
  }
}

export default HomeApi;
