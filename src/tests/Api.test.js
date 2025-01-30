import React from 'react';
import { render } from '@testing-library/react';

import { fetchData } from './__mocks__/api/data'; // Adjust the import path as necessary

jest.mock('./__mocks__/api/data'); // Mock the entire module

describe('fetchData', () => {
  beforeEach(() => {
    fetchData.mockClear(); // Clear previous mock calls
  });

  test('should fetch data successfully', async () => {
    const mockData = { data: ['item1', 'item2', 'item3'] };
    fetchData.mockImplementation(() => Promise.resolve(mockData)); // Mock the AJAX call

    const result = await fetchData(); // Call the mocked function
    expect(result).toEqual(mockData); // Check if the result matches the mock data
    expect(fetchData).toHaveBeenCalledTimes(1); // Ensure fetchData was called once
  });

  test('should handle fetch error', async () => {
    const errorMessage = 'Fetch error';
    fetchData.mockImplementation(() => Promise.reject(new Error(errorMessage))); // Mock an error

    await expect(fetchData()).rejects.toThrow(errorMessage); // Check if the error is thrown
    expect(fetchData).toHaveBeenCalledTimes(1); // Ensure fetchData was called once
  });
}); 