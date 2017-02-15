import {takeLatest} from 'redux-saga/effects'
import {
  GET_LOGS,
} from '../actions/LogAction'
import {bindAction} from '../utils/SagaUtils'
import logApi from '../api/admin/LogApi'

export default function* watchLog() {
  yield [
    takeLatest(GET_LOGS, bindAction(logApi.getLogs)),
  ]
}
