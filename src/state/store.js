import {createStore} from "redux";
import reducers from "./reducers/index";
//default state
export const store = createStore(reducers,{});