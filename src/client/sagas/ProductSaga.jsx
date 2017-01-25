import { takeLatest } from 'redux-saga/effects'
import { GET_ADMIN_PRODUCTS, GET_ADMIN_PRODUCT_DETAIL } from '../actions/ProductAction'
import { bindAction } from '../utils/SagaUtils'
import ProductApi from '../api/ProductApi'

export default function* watchProduct() {
  yield [
    takeLatest(GET_ADMIN_PRODUCTS, bindAction(ProductApi.getAdminProducts)),
    takeLatest(GET_ADMIN_PRODUCT_DETAIL, bindAction(ProductApi.getAdminProductDetail)),
  ]
}
