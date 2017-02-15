import axios from 'axios'

const CategoryApi = {
  getCategories() {
    return axios.get('/api/categories')
  },

  addCategory({ name }) {
    return axios.post('/admins/categories', { name })
  },

  updateCategory({id, data}) {
    return axios.post(`/admin/categories/${id}`, data)
  }
}

export default CategoryApi;
