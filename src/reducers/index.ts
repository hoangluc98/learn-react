import { combineReducers } from 'redux';
import postReducer from './post';

const reducers = combineReducers({
  posts: postReducer
});

export type RootState = ReturnType<typeof reducers>;

export default (state: any, action: any) => reducers(state, action);
