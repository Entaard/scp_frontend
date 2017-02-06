import axios from 'axios'

const ProductApi = {
  getProducts(page) {
    const params = {page}
    return axios.get('/admins/products', {params})
  },

  createProduct(data) {
    return axios.post('/admins/products', data)
  },

  getProductDetail(id) {
    return axios.get(`/admins/products/${id}`)
  },

  getImages({id, page}) {
    const params = {page}
    return axios.get(`/admins/products/${id}/images`, {params})
  }
}

export default ProductApi;
