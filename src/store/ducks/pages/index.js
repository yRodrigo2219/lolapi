import { PAGES } from './types';

const INITIAL_STATE = {
  homeLoading: false,
  matchLoading: false,
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAGES.REQUEST_HOME:
      return {
        ...state,
        homeLoading: true,
      }
    case PAGES.REQUEST_MATCH:
      return {
        ...state,
        matchLoading: true,
      }
    case PAGES.SUCCESS_HOME:
      return {
        ...state,
        homeLoading: false,
      }
    case PAGES.SUCCESS_MATCH:
      return {
        ...state,
        matchLoading: false,
      }
    default:
      return state;
  }
}