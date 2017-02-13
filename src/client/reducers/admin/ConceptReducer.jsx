import {
  GET_CONCEPTS,
} from '../../actions/ProductAction';

export default function (state = [], action) {
  switch (action.type) {
    case `${GET_CONCEPTS}_DATA`:
      return action.payload
  }
  return state;
}
