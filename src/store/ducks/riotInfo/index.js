import { RIOT } from './types';

const INITIAL_STATE = {
  patch: '',
  runes: [],
  loading: true,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RIOT.PATCH_SUCCESS:
      return {
        ...state,
        patch: action.payload,
      }
    case RIOT.RUNES_SUCCESS:
      return {
        ...state,
        runes: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}