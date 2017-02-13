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

  getConfigs() {
    return axios.get('/api/configurations')
  },

  addImages(id) {
    return axios.post(`/admins/products/${id}/create_images/`)
  },

  trainProduct({id, data}) {
    return axios.post(`/admins/products/${id}/train/`, data)
  },

  addOptions({product_id, quantity, color_id, size_id}) {
    return axios.post(`/admins/products/${product_id}/attr_products`, {quantity, color_id, size_id})
  },

  removeOption({product_id, id}) {
    return axios.delete(`/admins/products/${product_id}/attr_products/${id}`)
  },

  publish(id) {
    return axios.post(`/admins/products/${id}/publish`)
  }
}

export default ProductApi;
