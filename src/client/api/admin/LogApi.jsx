import axios from 'axios'

const LogApi = {
  getLogs() {
    return axios.get('/admins/logs')
  },
}

export default LogApi;
