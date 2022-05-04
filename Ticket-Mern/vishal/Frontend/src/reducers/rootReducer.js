import { combineReducers } from 'redux';

import  ticketReducer  from './ticket';

export const rootReducer = combineReducers({ticket: ticketReducer});
