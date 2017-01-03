import { takeLatest } from 'redux-saga/effects'
import { HOME } from '../actions/HomeAction'
import { bindAction } from '../utils/SagaUtils'
import HomeApi from '../api/HomeApi'

export default function* watchHome() {
  yield [
    takeLatest(HOME, bindAction(HomeApi.getHome)),
  ]
}
