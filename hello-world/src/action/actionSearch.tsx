import { SEARCH } from "./type";
export const search = (b) => (dispatch) => {
  dispatch({
    type: SEARCH,
    data: b,
  });
};
