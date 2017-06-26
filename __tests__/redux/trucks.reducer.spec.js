import {trucks, initialTrucks} from '../../src/reducers/trucks';
import {ADD_TRUCK, addTruck, TOGGLE_TRUCK, toggleTruck} from "../../src/actions/trucks";
import {uuid} from "../../src/models/uuid";

describe('Truck Reducer', () => {
  describe('Initial state', () => {
    it('Should return the initial state', () => {
      const action = {
        type: '@@INIT',
      };
      [trucks(initialTrucks, action)]
        .map(result => expect(result).toEqual(initialTrucks));
     });
  });

  describe('Sending actions', () => {
    it('Should be able to add a truck', () => {
      const action = {
        type: ADD_TRUCK,
        payload: {name: 'Awesome truck', uuid: uuid()}
      };

      const expected = {...action.payload, active: false};

      [trucks(initialTrucks, action)]
        .map(result => expect(result).toEqual([...initialTrucks, expected]));
    });

    it('Should be able to toggle the active property of a truck', () => {
      const actionAdd = {
        type: ADD_TRUCK,
        payload: {
          uuid: 'fdsqjmk333***mMM--',
          name: 'Awesome truck',
          active: false,
        },
      };

      const actionToggle = {
        type: TOGGLE_TRUCK,
        payload: 'fdsqjmk333***mMM--'
      };

      const state = trucks(initialTrucks, actionAdd);
      const nextState = trucks(state, actionToggle);
      const result = nextState.filter(truck => truck.uuid === actionToggle.payload)[0];
      expect(result).toBeTruthy();
      expect(result.active).toEqual(true);
    });
  });

  describe('Action creators', () => {
    describe('addTruck', () => {
      it('should be a function', () => {
        expect(typeof addTruck).toBe('function');
      });

      it('should return an action with the type ADD_TRUCK', () => {
        expect(addTruck().type).toBe('ADD_TRUCK');
      });

      it('should take a truck as a payload', () => {
        /**
         * Parameters should be a name and a uuid
         * You can use the uuid node module or the
         * uuid function from src/models/uuid.js
         */

        const name = 'test';
        const uuid = '9430432943043';

        const expected = {
          type: ADD_TRUCK,
          payload: {
            name, uuid
          }
        };

        expect(addTruck(name, uuid)).toEqual(expected);
      });
    });

    describe('toggleTruck', () => {
      it('should be a function', () => {
        expect(typeof toggleTruck).toBe('function');
      });

      it('should return an action with the type TOGGLE_TRUCK', () => {
        expect(toggleTruck().type).toBe('TOGGLE_TRUCK');
      });

      it('should take a uuid as a payload', () => {
        /**
         * The only parameter should be a uuid
         */

        const uuid = '9430432943043';

        const expected = {
          type: TOGGLE_TRUCK,
          payload: uuid
        };

        expect(toggleTruck(uuid)).toEqual(expected);
      });
    });
  });
});
