import { createSelector } from 'reselect';

export const usersDataSelector = state => state.users.usersData.users || [];

export const totalPagesSelector = state => state.users.usersData.total_pages;

export const sortedUsersSelector = createSelector([usersDataSelector], users => {
  return users.slice().sort((a, b) => b.registration_timestamp - a.registration_timestamp);
});