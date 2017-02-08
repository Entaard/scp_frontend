import {takeLatest} from 'redux-saga/effects'
import {
  GET_CATEGORIES
} from '../actions/CategoryAction'
import {bindAction} from '../utils/SagaUtils'
import CategoryApi from '../api/admin/CategoryApi'


export default function* watchCategory() {
  yield [
    takeLatest(GET_CATEGORIES, bindAction(CategoryApi.getCategories)),
  ]
}
