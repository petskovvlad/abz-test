import React from 'react';
import PropTypes from 'prop-types';

const FeedbackPositions = ({ positionData, handleChange }) => {
  const { name } = positionData;
  return (
    <label>
      <input type="radio" name="position" value={name} onChange={handleChange} /> {name}
    </label>
  );
};

FeedbackPositions.propTypes = {
  positionData: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default FeedbackPositions;