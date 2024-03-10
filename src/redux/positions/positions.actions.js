import { fetchPositions } from '../../gateway/usersGateway';

export const POSITIONS_DATA_RECIEVED = 'POSITIONS_DATA_RECIEVED';
export const POSITIONS_DATA_FETCHING = 'POSITIONS_DATA_FETCHING';

export const positionsDataReceived = positionsData => {
  return {
    type: POSITIONS_DATA_RECIEVED,
    payload: positionsData,
  };
};

export const positionsDataFetching = () => {
  return {
    type: POSITIONS_DATA_FETCHING,
  };
};

export const getPositionsData = () => {
  return function (dispatch) {
    dispatch(positionsDataFetching());
    fetchPositions().then(positionsData => dispatch(positionsDataReceived(positionsData)));
  };
};