import {
  GET_ADMIN_PRODUCT_DETAIL, GET_ADMIN_PRODUCTS_IMAGES
} from '../../actions/ProductAction';

export default function (state = {data: {concepts: [], images: {result: []}}, loading: true}, action) {
  switch (action.type) {
    case `${GET_ADMIN_PRODUCT_DETAIL}_DATA`:
      return {
        ...state,
        data: action.payload
      }
    case `${GET_ADMIN_PRODUCT_DETAIL}_LOADING`:
      return {
        ...state,
        loading: action.payload
      }
    case `${GET_ADMIN_PRODUCTS_IMAGES}_DATA`:
      return {
        ...state,
        data: {
          ...state.data,
          images: action.payload
        }
      }
  }
  return state;
}
