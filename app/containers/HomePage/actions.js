
import { GET_FIRM_INFO, SET_FIRM_INFO,UPDATE_FIRM_INFO } from './constants';

export function getFirmInfo() {
  return {
    type: GET_FIRM_INFO,
  };
}

export function firmLoaded(firm_info) {
  return {
    type: SET_FIRM_INFO,
    firm_info
  };
}

export function updateFirmInfo(firm_info, choosing_seat) {
  return {
    type: UPDATE_FIRM_INFO,
    firm_info,
    choosing_seat
  };
}

