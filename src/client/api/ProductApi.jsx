import axios from 'axios'
import ProductApiMock from './mock/ProductApiMock'

// const params = { ... }
// return axios.get('/sessions', { params })
const ProductApi = {
  getAdminProducts() {
    ProductApiMock.mockProduct()
    return axios.get('/admin/product')
  }
}

export default ProductApi;
