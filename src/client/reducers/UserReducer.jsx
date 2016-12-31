import { USER } from '../actions/type'

export default function (state = [], action) {
  switch (action.type) {
    case USER:
      return action.payload
  }
  return state;
}
