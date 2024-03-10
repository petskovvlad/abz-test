import { POSITIONS_DATA_FETCHING, POSITIONS_DATA_RECIEVED } from './positions.actions';

const initialState = {
  positionsData: [],
  isPositionsDataFetching: false,
};

const positionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSITIONS_DATA_FETCHING:
      return {
        ...state,
        isPositionsDataFetching: true,
      };
    case POSITIONS_DATA_RECIEVED:
      return {
        ...state,
        positionsData: action.payload,
        isPositionsDataFetching: false,
      };
    default:
      return state;
  }
};

export default positionsReducer;