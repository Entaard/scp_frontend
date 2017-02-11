import {put, call, takeLatest} from 'redux-saga/effects'
import {executeApi} from '../utils/SagaUtils'
import {
  GET_CATEGORIES,
  CREATE_CATEGORY, CATEGORY_CREATED, CREATE_CAT_ERROR,
  DELETE_CATEGORY, UPDATE_CATEGORY
} from '../actions/CategoryAction'
import {bindAction} from '../utils/SagaUtils'
import CategoryApi from '../api/admin/CategoryApi'


function* createCategory(action) {
  const response = yield call(executeApi, action, CategoryApi.addCategory)
  yield handleCreateSuccess(response)
}

function* handleCreateSuccess(response) {
  yield put({type: CATEGORY_CREATED, payload: response.data})
  yield put({type: CREATE_CAT_ERROR, payload: null})
}


export default function* watchCategory() {
  yield [
    takeLatest(GET_CATEGORIES, bindAction(CategoryApi.getCategories)),
    takeLatest(DELETE_CATEGORY, bindAction(CategoryApi.deleteCategory)),
    takeLatest(UPDATE_CATEGORY, bindAction(CategoryApi.updateCategory)),
    takeLatest(CREATE_CATEGORY, createCategory)
  ]
}
