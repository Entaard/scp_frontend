import {
  // IMAGES_ADDED, ADD_IMAGES_ERROR,
  PRODUCT_TRAINED, TRAIN_ERROR,
} from '../../actions/ProductAction';

export default function (state = {}, action) {
  switch (action.type) {
    // case IMAGES_ADDED:
    //   return {...state, images: action.payload};
    // case ADD_IMAGES_ERROR:
    //   return {...state, error: action.payload};
    case PRODUCT_TRAINED:
      return {...state, train: action.payload};
    case TRAIN_ERROR:
      return {...state, error: action.payload};
  }
  return state;
}


