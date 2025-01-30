import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import "@esri/calcite-components/dist/components/calcite-button";

import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-slider";

import "@esri/calcite-components/dist/components/calcite-list-item";
import "@esri/calcite-components/dist/components/calcite-list";
import { CalciteButton,CalciteList,CalciteListItem } from "@esri/calcite-components-react";

import { ExpressServerApis } from '../../../libs/utils/apiCalls';
function UserManagement() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => ExpressServerApis.get('/api/v1/users'),
  });



  const handleDeleteUser = (userId) => {
    // Implement delete functionality here
    console.log(`Delete user with ID: ${userId}`);
    setUsers(users.filter(user => user.id !== userId));
  };

  if (isLoading) return <div>Loading users...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log(data);

  return (
    <div className="user-list">
      <h1>User List</h1>
      <CalciteList>
          {data&&data.data.map(user => (
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

