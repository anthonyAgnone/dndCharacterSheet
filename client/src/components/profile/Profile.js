import React from 'react';
import { withUserContext } from '../../contexts/UserContext';

const Profile = ({ user }) => {
  return (
    <div>
      {user.firstName}
      's Profile
    </div>
  );
};

export default withUserContext(Profile);
