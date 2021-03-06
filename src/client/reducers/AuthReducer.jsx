import { AUTH_USER, DE_AUTH_USER, AUTH_ERROR } from '../actions/AuthAction';

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, user: action.payload };
    case DE_AUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload }
  }
  return state;
}
