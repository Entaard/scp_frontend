import { takeLatest } from 'redux-saga/effects'
import {
  GET_ADMIN_PRODUCTS, GET_ADMIN_PRODUCT_DETAIL, GET_ADMIN_PRODUCTS_IMAGES
} from '../actions/ProductAction'
import { bindAction } from '../utils/SagaUtils'
import ProductApi from '../api/admin/ProductApi'

export default function* watchProduct() {
  yield [
    takeLatest(GET_ADMIN_PRODUCTS, bindAction(ProductApi.getProducts)),
    takeLatest(GET_ADMIN_PRODUCTS_IMAGES, bindAction(ProductApi.getImages)),
    takeLatest(GET_ADMIN_PRODUCT_DETAIL, bindAction(ProductApi.getProductDetail)),
  ]
}
