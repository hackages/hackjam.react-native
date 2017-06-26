import {ADD_TRUCK, TOGGLE_TRUCK} from '../actions/trucks';
import {uuid} from '../models/uuid';

export const initialTrucks = [{
  uuid: uuid(),
  name: "Truck 1",
  active: true
},
  {
    uuid: uuid(),
    name: "Truck 2",
    active: false
  }
];


/**
 * TODO: Implement this reducer
 *
 * Actions for this reducer:
 *
 * ADD_TRUCK: Takes this object as a parameter:
 *      {
 *        name,
 *        uuid
 *      }
 *      And you should add the following property: active: false
 *
 * TOGGLE_TRUCK: Takes a truck as a parameter and toggles its active flag
 *               It shou
 *
 */

export const trucks = (state = initialTrucks, action) => {
  return state;
};
