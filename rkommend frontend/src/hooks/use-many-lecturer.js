import { useState } from 'react';
import { fetchManyLecturer } from '../lib/api-client/many-lecturer';
import { useEffect } from 'react';

export const useManyLecturer = (query) => {
  const [fetchManyLecturerResponse, setFetchManyLecturerResponse] = useState(null);
  const [fetchManyLecturerError, setFetchManyLecturerError] = useState(null);
  const [fetchManyLecturerLoading, setFetchManyLecturerLoading] = useState(false);
  
  useEffect(() => {
    fetchManyLecturer(query)
      .then(res => {
        setFetchManyLecturerLoading(false);
        setFetchManyLecturerResponse(res);
      })
      .catch(error => {
        setFetchManyLecturerLoading(false);
        setFetchManyLecturerError(error.message);
      })
  }, [query])
  
  return {
    fetchManyLecturerResponse,
    fetchManyLecturerError,
    fetchManyLecturerLoading,
  }
}