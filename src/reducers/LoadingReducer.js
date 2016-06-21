import { LOADING } from '../actions/LoadingAction';

export default function (state = false, action) {
  switch (action.type) {
    case LOADING:
      return action.payload;
  }
  return state;
}
