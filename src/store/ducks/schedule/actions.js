import { SCHEDULE } from './types';

export function loadRequest(filter) {
  return {
    type: SCHEDULE.REQUEST,
    payload: filter
  }
}

export function loadSuccess(response) {
  return {
    type: SCHEDULE.SUCCESS,
    payload: response
  }
}

export function loadFailure(filter) {
  return {
    type: SCHEDULE.FAILURE,
    payload: filter,
  }
}