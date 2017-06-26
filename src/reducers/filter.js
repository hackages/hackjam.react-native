import {SET_FILTER} from '../actions/filters';
import {EFilter, filters} from '../types/entites';

export const initialState = filters[EFilter.NONE];

/**
 * TODO: Implement this reducer
 *
 * Actions for this reducer:
 *
 * SET_FILTER: Takes a filter as a string and store it as its state
 *
 **/
export const filter = (state = initialState, action = {}) => {
  return state;
};
