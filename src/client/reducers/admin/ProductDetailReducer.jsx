import {
  GET_ADMIN_PRODUCT_DETAIL, GET_ADMIN_PRODUCTS_IMAGES, CREATE_PRODUCT,
  ADD_IMAGES, TRAIN_PRODUCT, ADD_OPTIONS, REMOVE_OPTION, RESET
} from '../../actions/ProductAction';

const initState = {
  data: {
    concepts: [],
    images: {result: []}
  },
  loading: true
}

export default function (state = initState, action) {
  switch (action.type) {
    case `${TRAIN_PRODUCT}_DATA`:
    case `${CREATE_PRODUCT}_DATA`:
    case `${ADD_IMAGES}_DATA`:
    case `${ADD_OPTIONS}_DATA`:
    case `${REMOVE_OPTION}_DATA`:
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
    case RESET:
      return initState
  }
  return state;
}
