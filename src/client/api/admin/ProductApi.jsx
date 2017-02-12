import axios from 'axios'

const ProductApi = {
  getProducts(page) {
    const params = {page}
    return axios.get('/admins/products', {params})
  },

  createProduct(data) {
    return axios.post('/admins/products', data)
  },

  deleteProduct(id) {
    return axios.delete(`/admins/products/${id}`)
  },

  getProductDetail(id) {
    return axios.get(`/admins/products/${id}`)
  },

  getImages({id, page}) {
    const params = {page}
    return axios.get(`/admins/products/${id}/get_images`, {params})
  },

  trainProduct(id, data) {
    return axios.post(`/admin/products/${id}/train/`, data)
  }
}

export default ProductApi;
