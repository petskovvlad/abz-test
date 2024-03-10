import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userData }) => {
  const { name, email, phone, position, photo } = userData;
  return (
    <div className="users__item">
      <img className="users__logo" src={photo} alt="user_logo" />
      <h1 className="users__name">{name}</h1>
      <p className="users__descriptions">{position}</p>
      <div className="users__email">{email}</div>
      <div className="users__phone">{phone}</div>
    </div>
  );
};

UserInfo.propTypes = {
  userData: PropTypes.object.isRequired
};

export default UserInfo;