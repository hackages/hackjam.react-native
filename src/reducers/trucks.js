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

const reducer = {
  [ADD_TRUCK]: (state, truck) => [...state, truck],
  [TOGGLE_TRUCK]: (state, truck) =>
    state.map(t => t.uuid === truck.uuid ? {...t, active: !t.active} : t),
};

export const trucks = (state = initialTrucks, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
