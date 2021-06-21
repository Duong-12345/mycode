import { FILTER } from "./type";
export const filter = (b) => (dispatch) => {
  dispatch({
    type: FILTER,
    data: b,
  });
};
