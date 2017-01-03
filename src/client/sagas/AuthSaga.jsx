import { put, call, takeLatest } from 'redux-saga/effects'
import { executeApi } from '../utils/SagaUtils'
import AuthApi from '../api/AuthApi'
import { authFromResponse } from '../utils/AuthUtils'
import {
  AUTH_WITH_FACEBOOK, AUTH_WITH_EMAIL, DE_AUTH,
  AUTH_USER, AUTH_ERROR, DE_AUTH_USER
} from '../actions/AuthAction'

function* authFacebook(action) {
  const response = yield call(executeApi, action, AuthApi.authFacebook)
  yield handleSuccessAuthen(response)
}

function* authEmail(action) {
  try {
    const response = yield call(executeApi, action, AuthApi.authEmail)
    yield handleSuccessAuthen(response)
  } catch (response) {
    const error = response.data.error
    if (error.code == 'INVALID_EMAIL_PASSWORD') {
      yield put({ type: AUTH_ERROR, payload: 'Invalid email or password' })
    }
  }
}

function* deAuth(action) {
  try {
    yield call(executeApi, action, AuthApi.deAuth)
    yield removeAuth()
  } catch (error) {
    yield removeAuth()
  }
}

function* removeAuth() {
  yield put({ type: DE_AUTH_USER })
  localStorage.removeItem('auth')
}

function* handleSuccessAuthen(response) {
  yield put({ type: AUTH_USER, payload: response.data })
  yield put({ type: AUTH_ERROR, payload: null })
  localStorage.setItem('auth', authFromResponse(response))
}

export default function* watchAuth() {
  yield [
    takeLatest(AUTH_WITH_FACEBOOK, authFacebook),
    takeLatest(AUTH_WITH_EMAIL, authEmail),
    takeLatest(DE_AUTH, deAuth)
  ]
}
