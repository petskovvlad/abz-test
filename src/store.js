import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './redux/users/users.reducer';
import positionsReducer from './redux/positions/positions.reducer';

const rootReducer = combineReducers({
  users: usersReducer,
  positions: positionsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;