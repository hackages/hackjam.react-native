import {SWITCH_SCREENS} from "../actions/ui";

export const initialState = {
  currentScreen: 'list'
};

const reducer = {
  [SWITCH_SCREENS]: (state, currentScreen = 'list') => ({currentScreen}),
};

export const ui = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state, action.payload) : state;
};
