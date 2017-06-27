import {uuid} from "../models/uuid";

export const ADD_TRUCK = 'ADD_TRUCK';
export const addTruck = (payload) => ({
  type: ADD_TRUCK,
  payload: {
    ...payload, uuid: uuid()
  }
});

export const TOGGLE_TRUCK = 'TOGGLE_TRUCK';
export const toggleTruck = (payload) => ({
  type: TOGGLE_TRUCK,
  payload,
});
