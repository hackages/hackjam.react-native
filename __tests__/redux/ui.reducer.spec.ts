import {initialState, ui} from '../../src/reducers/ui';
import {SWITCH_SCREENS} from '../../src/actions/ui';

describe('UI Reducer', () => {
  describe('Initial state', () => {
    it('Should return the initial state', () => {
      expect(ui(undefined, {type: '@@INIT'})).toEqual(initialState);
    });
  });

  describe('Switching screens', () => {
    it('Should be able to toggle back and forth between the screens', () => {
      const action = {
        type: SWITCH_SCREENS
      };

      let currentState = initialState;

      currentState = ui(currentState, action);
      expect(currentState.isOnList).toEqual(false);

      currentState = ui(currentState, action);
      expect(currentState.isOnList).toEqual(true);

    });
  })
});
