import axios from 'axios'

const AuthApi = {
  authFacebook(auth) {
    return axios.post('/api/sessions/facebook', { auth })
  },

  authEmail({ email, password }) {
    return axios.post('/api/sessions', { email, password })
  },

  deAuth() {
    return axios.delete('/api/sessions')
  },
}

export default AuthApi;
