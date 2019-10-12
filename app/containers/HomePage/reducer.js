import { UPDATE_FIRM_INFO, SET_FIRM_INFO,UPDATE_CHOOSING_SEAT } from './constants';

// The initial state of the App
const initialState = {
  firm_info: {
    name: "",
    startTime: "",
    endTime: "",
    date: "",
    location: "",
    seatKind: [],
    seatMap: []
  },
  choosing_seat: []
};

function checkChoosing(state, action) {
  if (state.choosing_seat.length) {
    let flag = false;
    const temp = state.choosing_seat.filter((current) => {
      if (action.choosing_seat.name != current.name) return true
      flag = true
      return false;
    })
    if (!flag) temp.push(action.choosing_seat)
    action.choosing_seat = temp
  } else {
    action.choosing_seat = [action.choosing_seat]
  }
    return action;
}

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIRM_INFO:
      return { ...state, ...action};
    case UPDATE_FIRM_INFO:
      return {...state, ...checkChoosing(state, action)}
    default:
      return state;
  }
}

export default homeReducer;
