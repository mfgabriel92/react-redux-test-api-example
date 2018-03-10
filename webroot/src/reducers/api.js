import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const testGET = createReducer({}, {
  [types.TEST_GET](state, action) {
    return action
  }
});
