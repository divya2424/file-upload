import { combineReducers } from "redux";

import eventReducer from "./eventReducer/reducers";

export default combineReducers({
  event: eventReducer,
});
