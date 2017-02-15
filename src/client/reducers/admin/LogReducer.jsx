import {
  GET_LOGS,
} from '../../actions/LogAction';

export default function (state = [], action) {
  switch (action.type) {
    case `${GET_LOGS}_DATA`:
      return action.payload
  }
  return state;
}
