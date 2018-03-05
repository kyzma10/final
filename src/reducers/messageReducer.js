import * as Types from '../types/appTypes';

const INITIAL_STATE = {
  messages: []
};

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const messageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case Types.ADD_NEW_MESSAGE:
        return {...state, messages: [...state.messages, {
          id: Date.now(),
          message: action.payload,
          imgClass: getRandom(0, 1) === 0 ? 'sent' : 'replies',
          img: 'images/ava-'+ getRandom(1, 9) + '.png'
        }] };
      default:
        return state;
    }

}
