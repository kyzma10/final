import * as Types from '../types/appTypes';

const INITIAL_STATE = {
  users: {}
};

export const usersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case Types.ADD_USERS:
        return {...state, users: action.payload
         };
      default:
        return state;
    }

}
