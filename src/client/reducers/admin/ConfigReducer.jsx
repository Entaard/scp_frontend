import {
  GET_CONFIGS,
} from '../../actions/ProductAction';

export default function (state = {concepts: [], colors: [], sizes: []}, action) {
  switch (action.type) {
    case `${GET_CONFIGS}_DATA`:
      return action.payload
  }
  return state;
}
