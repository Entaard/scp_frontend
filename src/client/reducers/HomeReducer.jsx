import { HOME } from '../actions/HomeAction';

export default function (state = {}, action) {
  switch (action.type) {
    case `${HOME}_DATA`:
      return action.payload
  }
  return state;
}
