import Data from "../../components/Data";
import { combineReducers } from "redux";
import Login from "../../reducer/login";
import reducerButton from "../../reducer/button";
import reducerDetail from "../../reducer/detail";
import counterReducer from "../../components/counterSlice";
import reducerFilter from "../../reducer/filter";
import reducerSearch from "reducer/search";
const phone = combineReducers({
  smartphone: Data,
  login: Login,
  Button: reducerButton,
  Detail: reducerDetail,
  counter: counterReducer,
  Filter: reducerFilter,
  Search: reducerSearch,
});
export default phone;
