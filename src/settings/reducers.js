import { combineReducers } from 'redux';
import { messageReducer } from '../reducers/messageReducer';
import { usersReducer } from '../reducers/usersReducer';

const reducers = combineReducers({
  messages: messageReducer,
  users: usersReducer
});

export default reducers;
