import axios from 'axios'
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)

export default {
  mockProduct() {
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
      ]
    )
  }
}
