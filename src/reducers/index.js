import { combineReducers } from 'redux';

import { filter } from './filter';
import { trucks } from './trucks';
import { ui } from './ui';

const reducer = combineReducers({
  filter,
  trucks,
  ui
});

export default reducer;
