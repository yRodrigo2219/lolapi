import { PAGES } from './types';

export function requestHome() {
  return {
    type: PAGES.REQUEST_HOME,
  }
}

export function successHome() {
  return {
    type: PAGES.SUCCESS_HOME,
  }
}

export function successMatch() {
  return {
    type: PAGES.SUCCESS_MATCH,
  }
}

export function requestMatch() {
  return {
    type: PAGES.REQUEST_MATCH,
  }
}

export function initApp() {
  return {
    type: PAGES.INIT_APP,
  }
}