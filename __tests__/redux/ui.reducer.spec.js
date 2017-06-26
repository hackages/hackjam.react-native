import {ui, initialState} from '../../src/reducers/ui';
import {SWITCH_SCREENS, switchScreens} from "../../src/actions/ui";


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
      expect(ui(initialState, action).isOnList).toEqual(false);
    });
  });

  describe('action creators', () => {
    describe('switchScreens', () => {
      it('Should be a function', () => {
        expect(typeof switchScreens).toBe('function');
      });

      it('should return an action of type SWITCH_SCREENS', () => {
        expect(switchScreens().type).toBe('SWITCH_SCREENS');
      });

      it('should take a string as a parameter and return it as its payload', () => {
        const screen = 'test';
        const expected = {
          type: 'SWITCH_SCREENS',
          payload: screen
        };

        expect(switchScreens(screen)).toEqual(expected);
      });
    });
  });
});
