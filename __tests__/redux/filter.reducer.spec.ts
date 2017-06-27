import {filter, initialState} from '../../src/reducers/filter';
import {SET_FILTER} from "../../src/actions/filters";
import {EFilter, filters} from "../../src/types/entites";

describe('Truck Reducer', () => {
  describe('Initial state', () => {
    it('Should return the initial state', () => {
      const action = {
        type: '@@INIT',
      };
      expect(filter(undefined, action)).toEqual(initialState);
    });
  });

  describe('Sending actions', () => {
    it('Should set the filter to whatever we pass', () => {
      const action = {
        type: SET_FILTER,
        payload: filters[EFilter.ACTIVE]
      };
      expect(filter(undefined, action)).toEqual(filters[EFilter.ACTIVE]);
    });
  });
});
