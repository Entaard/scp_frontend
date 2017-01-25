import axios from 'axios'
var MockAdapter = require('axios-mock-adapter')
var mock = new MockAdapter(axios)

// const params = { ... }
// return axios.get('/sessions', { params })
const ProductApi = {
  getAdminProducts() {
    mock.onGet('/admin/product').reply(200,
      [
        {
          "id": "1",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "basic",
          "price": "200",
          "url": "url",
        },
        {
          "id": "2",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "image",
          "price": "200",
          "url": "url",
        },
        {
          "id": "3",
          "friendly_url": "name-price-id",
          "name": "product-name",
          "status": "concept",
          "price": "200",
          "url": "url",
        }
      ])
    return axios.get('/admin/product')
  }
}

export default ProductApi;
