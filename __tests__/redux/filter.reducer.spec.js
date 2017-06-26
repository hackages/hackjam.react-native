import {filter, initialState} from '../../src/reducers/filter';
import {SET_FILTER, setFilter} from "../../src/actions/filters";
import {switchScreens} from "../../src/actions/ui";

describe('Filter Reducer', () => {
  it('Should be a function', () => {
    expect(typeof filter).toBe('function');
  });

  describe('Initial state', () => {
    it('Should return the initial state', () => {
      expect(filter()).toEqual(initialState);
    });
  });

  describe('Sending actions', () => {
    it('Should set the filter to whatever we pass', () => {
      const action = {
        type: SET_FILTER,
        payload: 'test'
      };
      expect(filter(undefined, action)).toEqual('test');
    });
  });

  describe('action creators', () => {
    describe('setFilter', () => {
      it('Should be a function', () => {
        expect(typeof setFilter).toBe('function');
      });

      it('should return an action of type SWITCH_SCREENS', () => {
        expect(setFilter().type).toBe('SET_FILTER');
      });

      it('should take a string as a parameter and return it as its payload', () => {
        const filter = 'test';
        const expected = {
          type: 'SET_FILTER',
          payload: filter
        };

        expect(setFilter(filter)).toEqual(expected);
      });
    });
  });
});
