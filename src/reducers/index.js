import {combineReducers} from "redux";

import {filter} from "./filter";
import {trucks} from "./trucks";
import {ui} from "./ui";
import {activeTrucks} from "./activeTrucks";

const reducer = combineReducers({
  filter,
  trucks,
  ui,
  activeTrucks,
});

export default reducer;
