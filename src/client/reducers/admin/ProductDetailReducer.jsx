import { GET_ADMIN_PRODUCT_DETAIL } from '../../actions/ProductAction';

export default function (state = [], action) {
  switch (action.type) {
    case `${GET_ADMIN_PRODUCT_DETAIL}_DATA`:
      return action.payload
  }
  return state;
}
