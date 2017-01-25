import axios from 'axios'
import ProductApiMock from './mock/ProductApiMock'

// const params = { ... }
// return axios.get('/sessions', { params })
const ProductApi = {
  getAdminProducts() {
    ProductApiMock.mockProduct()
    return axios.get('/admins/product')
  },
  getAdminProductDetail(id) {
    ProductApiMock.mockDetail(id)
    return axios.get(`/admins/product/${id}`)
  }
}

export default ProductApi;
