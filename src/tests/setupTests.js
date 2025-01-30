import '@testing-library/jest-dom';
// src/tests/setupTests.js
import { makeServer } from '../server/FakeApi';

beforeAll(() => {
  makeServer({ environment: 'test' }); // Start the server before all tests
});

afterAll(() => {
  if (server) {
    server.shutdown(); // Shutdown the server after all tests
  }
});
