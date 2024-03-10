import { USERS_DATA_FETCHING, USERS_DATA_RECIEVED } from './users.actions';

const initialState = {
  usersData: [],
  isDataFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_DATA_FETCHING:
      return {
        ...state,
        isDataFetching: true,
      };
    case USERS_DATA_RECIEVED:
      return {
        ...state,
        usersData: action.payload,
        isDataFetching: false,
      };
    default:
      return state;
  }
};

export default usersReducer;