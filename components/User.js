/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user }) {
  return (
    <>
      <img src={user.photoURL} alt="" />
      <h1>Name: {user.displayName}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Last Login {user.metadata.lastSignInTime}</h1>
    </>
  );
}

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
    photoURL: PropTypes.string,
  }).isRequired,
};
