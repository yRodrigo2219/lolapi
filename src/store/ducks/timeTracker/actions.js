import { TIME } from './types';

export function updateTime() {
  return {
    type: TIME.UPDATE,
  }
}

export function timeWindowEnded() {
  return {
    type: TIME.WINDOW_ENDED,
  }
}

export function setDelay(delay) {
  return {
    type: TIME.SET_DELAY,
    payload: delay
  }
}

export function loadRequest() {
  return {
    type: TIME.REQUEST,
  }
}

export function loadSuccess(response) {
  return {
    type: TIME.SUCCESS,
    payload: response,
  }
}

export function loadFailure() {
  return {
    type: TIME.FAILURE,
  }
}