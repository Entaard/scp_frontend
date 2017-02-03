import { PRODUCT_CREATED, CREATE_ERROR} from '../../actions/ProductAction';

export default function (state = {}, action) {
  switch (action.type) {
    case PRODUCT_CREATED:
      return { ...state, info: action.payload };
    case CREATE_ERROR:
      return { ...state, error: action.payload }
  }
  return state;
}
