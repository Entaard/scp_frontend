import axios from 'axios'

const AuthApi = {
  authFacebook(auth) {
    return axios.post('/sessions/facebook', { auth })
  },

  authEmail({ email, password }) {
    return axios.post('/sessions', { email, password })
  },

  deAuth() {
    return axios.delete('/sessions')
  },
}

export default AuthApi;
