import { combineReducers } from "redux";
import menus from "./menus.js";
import modals from "./modals.js";
import inputs from "./inputs.js";

const rootReducer = combineReducers({ menus, modals, inputs });

export default rootReducer;