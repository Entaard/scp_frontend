import axios from 'axios'

const CategoryApi = {
  getCategories() {
    return axios.get('/api/categories')
  },
  addCategory(category) {
    return axios.post('/admins/categories', category)
  },
  updateCategory({id, data}) {
    return axios.post(`/admin/categories/${id}`, data)
  },
}

export default CategoryApi;
