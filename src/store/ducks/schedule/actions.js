import { SCHEDULE } from './types';

export function loadRequest() {
  return {
    type: SCHEDULE.REQUEST,
  }
}

export function loadSuccess(response) {
  return {
    type: SCHEDULE.SUCCESS,
    payload: response
  }
}

export function loadFailure() {
  return {
    type: SCHEDULE.FAILURE,
  }
}