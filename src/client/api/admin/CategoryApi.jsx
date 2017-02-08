import axios from 'axios'

const CategoryApi = {
  getCategories() {
    return axios.get('/api/categories')
  },
}

export default CategoryApi;
