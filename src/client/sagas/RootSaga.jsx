import {fork} from 'redux-saga/effects'
import watchAuth from './AuthSaga'
import watchHome from './HomeSaga'
import watchProduct from './ProductSaga'
import watchCategory from './CategorySaga'

export default function* saga() {
  yield [
    fork(watchHome),
    fork(watchAuth),
    fork(watchProduct),
    fork(watchCategory),
  ]
}
