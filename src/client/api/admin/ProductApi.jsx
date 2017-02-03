import axios from 'axios'
import ProductApiMock from '../mock/ProductApiMock'

const ProductApi = {
  getProducts(page) {
    const params = page
    ProductApiMock.mockProduct(page)
    return axios.get('/admins/products', { params })
  },

  createProduct(data) {
    ProductApiMock.mockCreate(data)
    return axios.post('/admins/products', { data })
  },

  getProductDetail(id) {
    ProductApiMock.mockDetail(id)
    return axios.get(`/admins/products/${id}`)
  },

  getImages({ id, page }) {
    ProductApiMock.mockImages({ id })
    const params = { page }
    return axios.get(`/admins/products/${id}/images`, { params })
  }
}

export default ProductApi;
