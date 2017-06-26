import {SWITCH_SCREENS} from '../actions/ui';


export const initialState = {
  isOnList: true,
};

const reducer = {
  [SWITCH_SCREENS]: (state) => ({...state, isOnList: !state.isOnList}),
};

export const ui = (state = initialState, action) => {
  const handler = reducer[action.type];
  return handler ? handler(state) : state;
};
