import {put, call, takeLatest} from 'redux-saga/effects'
import {executeApi} from '../utils/SagaUtils'
import {
  CREATE_PRODUCT, PRODUCT_CREATED, CREATE_ERROR,
  DELETE_PRODUCT,
  ADD_IMAGES, IMAGES_ADDED, ADD_IMAGES_ERROR,
  TRAIN_PRODUCT, PRODUCT_TRAINED, TRAIN_ERROR,
  GET_ADMIN_PRODUCTS, GET_ADMIN_PRODUCT_DETAIL, GET_ADMIN_PRODUCTS_IMAGES
} from '../actions/ProductAction'
import {bindAction} from '../utils/SagaUtils'
import ProductApi from '../api/admin/ProductApi'

function* createProduct(action) {
  const response = yield call(executeApi, action, ProductApi.createProduct)
  yield handleCreateSuccess(response)
}

function* handleCreateSuccess(response) {
  yield put({type: PRODUCT_CREATED, payload: response.data})
  yield put({type: CREATE_ERROR, payload: null})
}

function* trainProduct(action) {
  const response = yield call(executeApi, action, ProductApi.addImages)
  yield handleTrainSuccess(response)
}

function* handleTrainSuccess(response) {
  yield put({type: PRODUCT_TRAINED, payload: response.data})
  yield put({type: TRAIN_ERROR, payload: null})
}

export default function* watchProduct() {
  yield [
    takeLatest(CREATE_PRODUCT, createProduct),
    takeLatest(TRAIN_PRODUCT, trainProduct),
    takeLatest(GET_ADMIN_PRODUCTS, bindAction(ProductApi.getProducts)),
    takeLatest(DELETE_PRODUCT, bindAction(ProductApi.deleteProduct)),
    takeLatest(GET_ADMIN_PRODUCTS_IMAGES, bindAction(ProductApi.getImages)),
    takeLatest(GET_ADMIN_PRODUCT_DETAIL, bindAction(ProductApi.getProductDetail)),
  ]
}
