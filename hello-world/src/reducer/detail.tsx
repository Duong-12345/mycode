import { DETAIL } from "action/type";
const a = 1;
export default function reducerDetail(state = a, action) {
  switch (action.type) {
    case DETAIL:
      return action.data;
    default:
      return state;
  }
}
