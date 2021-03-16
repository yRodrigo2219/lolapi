import { RIOT } from './types';

export function requestPatch() {
  return {
    type: RIOT.PATCH_REQUEST,
  }
}

export function successPatch(patchVersion) {
  return {
    type: RIOT.PATCH_SUCCESS,
    payload: patchVersion
  }
}

export function failurePatch() {
  return {
    type: RIOT.PATCH_FAILURE,
  }
}

export function requestRunes(patchVersion) {
  return {
    type: RIOT.RUNES_REQUEST,
    payload: patchVersion,
  }
}

export function successRunes(response) {
  return {
    type: RIOT.RUNES_SUCCESS,
    payload: response
  }
}

export function failureRunes(patchVersion) {
  return {
    type: RIOT.RUNES_FAILURE,
    payload: patchVersion,
  }
}