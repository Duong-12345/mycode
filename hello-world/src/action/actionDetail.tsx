import { DETAIL } from "./type";
export const detail = (b) => (dispatch) => {
  dispatch({
    type: DETAIL,
    data: b,
  });
};
