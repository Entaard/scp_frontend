import {
  GET_CATEGORIES,
} from '../../actions/CategoryAction';

export default function (state = {data: []}, action) {
  switch (action.type) {
    case `${GET_CATEGORIES}_DATA`:
      return {
        ...state,
        data: action.payload
      }
  }
  return state;
}
