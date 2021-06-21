import { FILTER } from "action/type";
const a = 1;
export default function reducerFilter(state = a, action) {
  switch (action.type) {
    case FILTER:
      return action.data;
    default:
      return state;
  }
}
