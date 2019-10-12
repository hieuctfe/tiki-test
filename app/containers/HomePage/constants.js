/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_FIRM_INFO = 'Home/GET_FIRM_INFO';

export const SET_FIRM_INFO = 'Home/SET_FIRM_INFO';

export const UPDATE_FIRM_INFO = 'Home/UPDATE_FIRM_INFO';

export const UPDATE_CHOOSING_SEAT = 'Home/UPDATE_CHOOSING_SEAT';


