import * as types from '../actions/actionTypes';

export default function fetchImageReducer(state = {}, action) {
  switch (action.type) {
    case types.FETCH_IMAGES:
      return {
        ...state,
        images: action.images
      };
    default:
      return state;
  }
}