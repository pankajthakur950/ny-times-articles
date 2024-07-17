import { useQuery, QueryFunction } from "@tanstack/react-query";

type FetchFunction<T> = QueryFunction<T>;

// Define the type for the return data
interface UseFetchDataResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useFetchData = <T>(
    fetchFn: FetchFunction<T>,
    fetchKey: string[]
  ): UseFetchDataResult<T> =>{
    const { data, isLoading, isError } = useQuery({
        queryKey: fetchKey,
        queryFn: fetchFn
      });
    return {data, isLoading, isError};
};