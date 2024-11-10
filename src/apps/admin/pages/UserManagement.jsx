import React, { useState, useEffect } from 'react';

import "@esri/calcite-components/dist/components/calcite-button";

import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";

import "@esri/calcite-components/dist/components/calcite-list-item";
import "@esri/calcite-components/dist/components/calcite-list";
import { CalciteButton,CalciteList,CalciteListItem, CalciteIcon, CalciteSlider } from "@esri/calcite-components-react";

import { apiUser } from '../../../libs/utils/apiCalls';
function UserManagement() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Replace this with your actual API call
      const response = await apiUser.get('/users');
      if (response && response.data && response.status === 200) {
        setUsers(response.data);
      } else {
         throw new Error(`Unexpected status code: ${response.status}`);
        }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleDeleteUser = (userId) => {
    // Implement delete functionality here
    console.log(`Delete user with ID: ${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="user-list">
      <h1>User List</h1>
      <CalciteList>
        {users.map(user => (
          <CalciteListItem key={user.id} label={user.name} description={user.email}>
            <CalciteButton
              slot="actions-end"
              kind="danger"
              onClick={() => handleDeleteUser(user.id)}
            >
              Delete
            </CalciteButton>
          </CalciteListItem>
        ))}
      </CalciteList>
    </div>
  );
}

export default UserManagement;

