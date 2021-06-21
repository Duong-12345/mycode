import { LOGIN } from "./type";
export const dangnhap = () => (dispatch) => {
  dispatch({
    type: LOGIN,
  });
};
