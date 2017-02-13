import {put, call, takeLatest} from 'redux-saga/effects'
import {executeApi} from '../utils/SagaUtils'
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT, ADD_OPTIONS, PUBLISH,
  ADD_IMAGES, GET_CONFIGS,
  TRAIN_PRODUCT,
  GET_ADMIN_PRODUCTS, GET_ADMIN_PRODUCT_DETAIL, GET_ADMIN_PRODUCTS_IMAGES
} from '../actions/ProductAction'
import {bindAction} from '../utils/SagaUtils'
import ProductApi from '../api/admin/ProductApi'

export default function* watchProduct() {
  yield [
    takeLatest(CREATE_PRODUCT, bindAction(ProductApi.createProduct)),
    takeLatest(ADD_IMAGES, bindAction(ProductApi.addImages)),
    takeLatest(PUBLISH, bindAction(ProductApi.publish)),
    takeLatest(ADD_OPTIONS, bindAction(ProductApi.addOptions)),
    takeLatest(TRAIN_PRODUCT, bindAction(ProductApi.trainProduct)),
    takeLatest(GET_CONFIGS, bindAction(ProductApi.getConfigs)),
    takeLatest(GET_ADMIN_PRODUCTS, bindAction(ProductApi.getProducts)),
    takeLatest(DELETE_PRODUCT, bindAction(ProductApi.deleteProduct)),
    takeLatest(GET_ADMIN_PRODUCTS_IMAGES, bindAction(ProductApi.getImages)),
    takeLatest(GET_ADMIN_PRODUCT_DETAIL, bindAction(ProductApi.getProductDetail)),
  ]
}
