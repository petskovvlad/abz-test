import { fetchUsers } from '../../gateway/usersGateway';

export const USERS_DATA_RECIEVED = 'USERS_DATA_RECIEVED';
export const USERS_DATA_FETCHING = 'USERS_DATA_FETCHING';

export const usersDataReceived = usersData => {
  return {
    type: USERS_DATA_RECIEVED,
    payload: usersData,
  };
};

export const usersDataFfetching = () => {
  return {
    type: USERS_DATA_FETCHING,
  };
};

export const getUsersData = currentPage => {
  return function (dispatch) {
    dispatch(usersDataFfetching());
    fetchUsers(currentPage).then(usersData => dispatch(usersDataReceived(usersData)));
  };
};