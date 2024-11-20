import React from 'react';

const UserInfo = ({ user, onLogout }) => (
  <div className="user-info">
    <h3>User Information</h3>
    <p>Email: {user.email}</p>
    <p>Name: {user.name}</p>
    <img src={user.picture} alt="Profile" />
    <button onClick={onLogout} className="logout-button">
      Logout
    </button>
  </div>
);

export default UserInfo; 