import { PATCH } from './types';

export function requestPatch() {
  return {
    type: PATCH.REQUEST,
  }
}

export function successPatch(patchVersion) {
  return {
    type: PATCH.SUCCESS,
    payload: patchVersion
  }
}

export function failurePatch() {
  return {
    type: PATCH.FAILURE,
  }
}