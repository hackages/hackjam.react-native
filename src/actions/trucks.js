import {uuid as uuidGen} from "../models/uuid";

export const ADD_TRUCK = 'ADD_TRUCK';
export const addTruck = (name, uuid) => ({
  type: ADD_TRUCK,
  payload: {
    name,
    uuid: uuid || uuidGen()
  }
});

export const TOGGLE_TRUCK = 'TOGGLE_TRUCK';
export const toggleTruck = (uuid) => ({
  type: TOGGLE_TRUCK,
  payload: uuid
});
