import Promise from 'promise'
import { call } from 'redux-saga/effects'
import { processError } from '../utils/ErrorHandler'
import { isDevelopment } from '../configs/EnvConfig'

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
    try {
      yield call(executeApi, action, api, true)
    } catch (error) {
      if (isDevelopment()) {
        console.log(error)
      }
    }
  }
}

export function executeApi(action, api, updateData = false) {
  const { type, payload, handler } = action
  handler.dispatch({ type: `${type}_LOADING`, payload: true })
  return api(payload)
    .then(response => {
      console.log(response, 'res')
      if (updateData) {
        handler.dispatch({ type: `${type}_DATA`, payload: response.data })
      }
      handler.dispatch({ type: `${type}_LOADING`, payload: false })
      handler.resolve(response)
      return response
    }, error => {
      handler.dispatch({ type: `${type}_LOADING`, payload: false })
      handler.reject(error)
      processError(error)
      return Promise.reject(error.response)
    })
}
