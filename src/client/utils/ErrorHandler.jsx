import { browserHistory } from 'react-router'

export function processError(error) {
  if (error.response.data.code) {
    handleErrorCode(error.response.data.code)
  } else {
    handleErrorStatus(error.response.status)
  }
}

function handleErrorCode(code) {
  switch (code) {
    case 'NOT_FOUND':
      browserHistory.push('/not-found')
      break;
    case 'PERMISSION_DENIED':
      browserHistory.push('/permission-denied')
      break;
  }
}

function handleErrorStatus(status) {
  switch (status) {
    case 404:
      browserHistory.push('/not-found')
      break;
    case 403:
      browserHistory.push('/permission-denied')
      break;
  }
}
