import axios from 'axios'

const CategoryApi = {
  getCategories() {
    return axios.get('/api/categories')
  },
  addCategory(category) {
    return axios.post('/admins/categories', category)
  },
  deleteCategory(id) {
    return axios.delete('/admins/categories', id)
  },
  updateCategory({id, data}) {
    return axios.post(`/admin/categories/${id}`, data)
  },
}

export default CategoryApi;
