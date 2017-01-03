import { fork } from 'redux-saga/effects'
import watchAuth from './AuthSaga'
import watchHome from './HomeSaga'

export default function* saga() {
  yield [
    fork(watchHome),
    fork(watchAuth)
  ]
}
