import { renderHook } from '@testing-library/react';
import { useFetchData } from '../useFetchData';
import { useQuery } from '@tanstack/react-query';

// Mock useQuery function
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

// Mock data for testing
const mockData = {
  id: 1,
  title: 'Mock Article',
  content: 'Mock content',
};

describe('Testing useFetchData hook', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should fetch data successfully', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    const { result } = renderHook(() =>
      useFetchData(()=>{}, ['articles'])
    );

    const { data, isError, isLoading } = result.current;
    expect(data).toBe(mockData);
    expect(isError).toBe(false);
    expect(isLoading).toBe(false);
    expect(useQuery).toHaveBeenCalled();
  });
});
