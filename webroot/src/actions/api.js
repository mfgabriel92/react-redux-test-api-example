import * as types from '../actions/types';
import Api from '../lib/Api';

export function testGET() {
  return(dispatch, getState) => {
    return Api.get('users').then((res) => {
      dispatch({
        type: types.TEST_GET,
        data: res
      })
    })
  }
}