import { FETCH_CONTRIBUTORS,
         FETCH_CONTRIBUTORS_VERSION,
         CHANGE_VERSION,
         CHANGE_TEAM
       } from '../actions/index';


const INITIAL_STATE = { contributors: [], version: -1, team: -1};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CONTRIBUTORS:
      return { ...state, contributors: action.payload };

    case FETCH_CONTRIBUTORS_VERSION:
      return { ...state, contributors: action.payload };

    case CHANGE_VERSION:
      return { ...state, version: action.payload };

    case CHANGE_TEAM:
      return { ...state, team: action.payload };

    default:
      return state;
  }
}
