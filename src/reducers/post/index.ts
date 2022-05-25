import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_ERROR } from './types';
import { initialState } from './model';
import { IPayload } from './types';

function postReducers(state = initialState, payload: IPayload) {
  switch (payload.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        requesting: true
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: true,
        data: payload.data
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        requesting: false,
        message: payload.message
      };

    default:
      return state;
  }
}

export default postReducers;
