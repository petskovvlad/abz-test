import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { getUsersData } from '../../redux/users/users.actions';
import UserInfo from './UserInfo';
import { sortedUsersSelector, totalPagesSelector } from '../../redux/users/users.selectors';

import './usersList.scss';

const UsersList = ({ getUsersData }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const usersList = useSelector(sortedUsersSelector);
  const totalPages = useSelector(totalPagesSelector);

  const handleShowMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    getUsersData(currentPage);
  }, [currentPage, getUsersData]);
  return (
    <section className="users">
      <h1 className="users__title">Working with GET request</h1>
      <div className="users__container">
        {usersList.map(user => (
          <UserInfo key={user.id} userData={user} />
        ))}
      </div>
      <button
        className="action-button users__action-btn"
        onClick={handleShowMore}
        disabled={currentPage === totalPages}
      >
        Show more
      </button>
    </section>
  );
};

const mapDispatch = {
  getUsersData,
};

UsersList.propTypes = {
  getUsersData: PropTypes.func.isRequired
};

export default connect(null, mapDispatch)(UsersList);