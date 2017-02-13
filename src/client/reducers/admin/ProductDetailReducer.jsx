import {
  GET_ADMIN_PRODUCT_DETAIL, GET_ADMIN_PRODUCTS_IMAGES, CREATE_PRODUCT, ADD_IMAGES, TRAIN_PRODUCT
} from '../../actions/ProductAction';

export default function (state = {data: {concepts: [], images: {result: []}}, loading: true}, action) {
  switch (action.type) {
    case `${TRAIN_PRODUCT}_DATA`:
    case `${CREATE_PRODUCT}_DATA`:
    case `${ADD_IMAGES}_DATA`:
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
