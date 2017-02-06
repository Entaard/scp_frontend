import {
  GET_ADMIN_PRODUCTS
} from '../../actions/ProductAction';

export default function (state = {data: {result: [], page_count: 0}}, action) {
  switch (action.type) {
    case `${GET_ADMIN_PRODUCTS}_DATA`:
      return {
        ...state,
        data: action.payload
      }
  }
  return state;
}
