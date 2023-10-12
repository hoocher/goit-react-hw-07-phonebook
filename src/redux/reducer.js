import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filterSlice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filtersReducer,
});
