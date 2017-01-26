import Promise from 'promise'
import { call, put } from 'redux-saga/effects'
import { processError } from '../utils/ErrorHandler'

export function createAction(actionType, dispatch) {
  return (request) => {
    return new Promise((resolve, reject) => {
      const handler = { dispatch, resolve, reject }
      const action = { type: actionType, payload: request }
      dispatch({ ...action, handler: handler })
    })
  }
}

export function bindAction(api) {
  return function* _bindAction(action) {
    const { type, handler } = action
    try {
      const response = yield call(executeApi, action, api)
      yield put({ type: `${type}_DATA`, payload: response.data })
      handler.dispatch({ type: `${type}_LOADING`, payload: false })
    } catch (error) {
      handler.dispatch({ type: `${type}_LOADING`, payload: false })
    }
  }
}

export function executeApi(action, api) {
  const { type, payload, handler } = action
  handler.dispatch({ type: `${type}_LOADING`, payload: true })
  return api(payload)
    .then(response => {
      handler.resolve(response)
      return response
    }, error => {
      handler.reject(error)
      processError(error)
      return Promise.reject(error.response)
    })
}
