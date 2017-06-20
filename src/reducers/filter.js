import {SET_FILTER} from "../actions/filters";
import {EFilter, filters, IFilters} from "../types/entites";

export const initialState = EFilter.NONE;

const reducer = {
  [SET_FILTER]: (state, filter) => filter,
};

export const filter = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
