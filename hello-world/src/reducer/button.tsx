import { BUTTON } from "action/type";
const a = 1;
export default function reducerButton(state = a, action) {
  switch (action.type) {
    case BUTTON:
      return action.data;
    default:
      return state;
  }
}
