import {takeLatest} from 'redux-saga/effects'
import {
  GET_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY
} from '../actions/CategoryAction'
import {bindAction} from '../utils/SagaUtils'
import CategoryApi from '../api/admin/CategoryApi'

export default function* watchCategory() {
  yield [
    takeLatest(GET_CATEGORIES, bindAction(CategoryApi.getCategories)),
    takeLatest(UPDATE_CATEGORY, bindAction(CategoryApi.updateCategory)),
    takeLatest(CREATE_CATEGORY, bindAction(CategoryApi.addCategory)),
  ]
}
