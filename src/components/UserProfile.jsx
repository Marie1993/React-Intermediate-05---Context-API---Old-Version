import React from 'react';
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

function UserProfile() {

  const { isOnline, setIsOnline } = useContext(UserContext);

  function toggleIsOnline() {
    setIsOnline(!isOnline);
  }

  return (
    <>

      <div>User is {isOnline ? 'online' : 'offline'} </div>

      <button type="button" onClick={() => toggleIsOnline()}>
        click to change user status{' '}
      </button>
    </>
  );
}

export default UserProfile;
