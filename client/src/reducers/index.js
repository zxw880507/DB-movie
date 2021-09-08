import { combineReducers } from "redux";
import * as all from "./searchReducer";

export const allReducers = combineReducers({
  searchkeywords: all.searchKeywordsReducer,
  searchResult: all.searchResultReducer,
  pages: all.pageReducer,
});
