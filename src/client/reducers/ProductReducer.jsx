import { GET_ADMIN_PRODUCTS } from '../actions/ProductAction';

export default function (state = {}, action) {
  switch (action.type) {
    case `${GET_ADMIN_PRODUCTS}_DATA`:
      return action.payload
  }
  return state;
}
