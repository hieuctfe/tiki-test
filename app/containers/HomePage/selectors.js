import { createSelector } from 'reselect';

const selectHome = (state) => state.home

const makeSelectFirm = () => createSelector(
  selectHome,
  (homeState) => homeState.firm_info
);

const choosingSeat = () => createSelector(
  selectHome,
  (homeState) => homeState.choosing_seat
);

export {
  selectHome,
  makeSelectFirm,
  choosingSeat
};
