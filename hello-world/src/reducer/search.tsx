import { SEARCH } from "action/type";
const a = 1;
export default function reducerSearch(state = a, action) {
  switch (action.type) {
    case SEARCH:
      return action.data;
    default:
      return state;
  }
}
