import { combineReducers } from 'redux';
import ContributorsReducer from './reducer_contributor';

const rootReducer = combineReducers({
  demo: ContributorsReducer,
});

export default rootReducer;
