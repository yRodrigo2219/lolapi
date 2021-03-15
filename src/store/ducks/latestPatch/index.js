import { PATCH } from './types';

const INITIAL_STATE = '';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PATCH.SUCCESS:
      return action.payload;
    default:
      return state;
  }
}