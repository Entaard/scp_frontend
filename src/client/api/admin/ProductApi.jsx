import axios from 'axios'
import ProductApiMock from '../mock/ProductApiMock'

const ProductApi = {
  getProducts() {
    ProductApiMock.mockProduct()
    return axios.get('/admins/products')
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
