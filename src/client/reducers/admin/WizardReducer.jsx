import {
  PRODUCT_TRAINED, TRAIN_ERROR,
} from '../../actions/ProductAction';

export default function (state = {}, action) {
  switch (action.type) {
    case PRODUCT_TRAINED:
      return {...state, train: action.payload};
    case TRAIN_ERROR:
      return {...state, error: action.payload};
  }
  return state;
}


