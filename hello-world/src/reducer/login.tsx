import { LOGIN } from "action/type";
const st = false;
export default function Login(state = st, action) {
  switch (action.type) {
    case LOGIN:
      return true;
    default:
      return state;
  }
}
