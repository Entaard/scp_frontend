import axios from 'axios'
var MockAdapter = require('axios-mock-adapter')
var mock = new MockAdapter(axios)

const HomeApi = {
  getHome() {
    mock.onGet('/home').reply(200, {
      success: 'hello world'
    })
    return axios.get('/home')
  }
}

export default HomeApi;
