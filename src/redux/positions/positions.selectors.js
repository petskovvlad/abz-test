import { createSelector } from 'reselect';

export const positionsDataSelector = state => state.positions.positionsData.positions || [];

export const memoizedPositionsDataSelector = createSelector(
  [positionsDataSelector],
  positionsData => positionsData,
);