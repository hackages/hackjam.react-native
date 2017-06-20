import {math, initialState} from '../../src/reducers/mathReducer';

describe("Redux", () => {
  describe("Math reducer", () => {
    it('should be a function', () => {
      expect(typeof math).toEqual('function');
    });

    it('should return the initial state', () => {
      const garbageAction = {
        type: 'fdsjqklfjdsqlmfjds'
      };
      const result = math(undefined, garbageAction);
      expect(result).toEqual(initialState);
      expect(typeof initialState).toBeDefined();
    });

    it('should be able to increment its value', () => {
      const actionIncrement = {
        type: 'INCREMENT',
      };
      const result = math(0, actionIncrement);
      expect(result).toEqual(1);
    });
  });
});