import { createStore, combineReducers } from "redux";
import { filterReducer } from "./filter.reducer";
import { groupReducer } from "./group.reducer";

export let store = createStore(combineReducers({ filters: filterReducer, groups: groupReducer }));
