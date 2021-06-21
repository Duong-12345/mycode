import { BUTTON } from "./type";
export const button = (b) => (dispatch) => {
  dispatch({
    type: BUTTON,
    data: b,
  });
};
