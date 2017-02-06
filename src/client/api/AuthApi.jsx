import axios from 'axios'
import mock from '../api/mock/MockAdapter'

const AuthApi = {
  authFacebook(auth) {
    return axios.post('/sessions/facebook', { auth })
  },

  authEmail({ email, password }) {
    mock.restore()
    return axios.post('/sessions', { email, password })
  },

  deAuth() {
    return axios.delete('/sessions')
  },
}

export default AuthApi;
