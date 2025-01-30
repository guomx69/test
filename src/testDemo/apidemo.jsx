// src/testDemo/apidemo.jsx

import React, { useEffect } from 'react';


//import { makeServer } from '../server/FakeApi';

const ApiDemo = () => {

  const callApi = () => {
    console.log('callApi');
    fetch('/api/v1/users')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }

    useEffect(() => {

       

  }, []);

  return <div>ApiDemo

<h1>Vite + React</h1>
      <div className="card">
        <button onClick={callApi}>
          call api
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
  </div>;
};

export default ApiDemo;
