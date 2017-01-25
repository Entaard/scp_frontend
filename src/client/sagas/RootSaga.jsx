import { fork } from 'redux-saga/effects'
import watchAuth from './AuthSaga'
import watchHome from './HomeSaga'
import watchProduct from './ProductSaga'

export default function* saga() {
  yield [
    fork(watchHome),
    fork(watchAuth),
    fork(watchProduct)
  ]
}
