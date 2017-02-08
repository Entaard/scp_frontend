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
    const params = {id}
    return axios.delete('/admins/products', {params})
  },

  getProductDetail(id) {
    return axios.get(`/admins/products/${id}`)
  },

  getImages({id, page}) {
    const params = {page}
    return axios.get(`/admins/products/${id}/get_images`, {params})
  },

  addImages(id, image_ids) {
    return axios.post(`/admin/products/${id}/images/`, image_ids)
  },

  trainProduct(id, data) {
    return axios.post(`/admin/products/${id}/train/`, data)
  }
}

export default ProductApi;
