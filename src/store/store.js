import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { contactsReducer } from './contactsReducer';

export const store = createStore(contactsReducer, composeWithDevTools());
