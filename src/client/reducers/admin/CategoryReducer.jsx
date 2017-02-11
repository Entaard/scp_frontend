import {
  GET_CATEGORIES,
  CATEGORY_CREATED, CREATE_CAT_ERROR
} from '../../actions/CategoryAction';

export default function (state = {data: []}, action) {
  switch (action.type) {
    case `${GET_CATEGORIES}_DATA`:
      return {
        ...state,
        data: action.payload
      }
    case CATEGORY_CREATED:
      return {...state, data: action.payload};
    case CREATE_CAT_ERROR:
      return {...state, error: action.payload};
  }
  return state;
}
