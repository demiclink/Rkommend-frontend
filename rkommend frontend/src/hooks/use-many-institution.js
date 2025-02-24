import { useState } from 'react';
import { fetchManyInstitution } from '../lib/api-client/many-institution';
import { useEffect } from 'react';

export const useManyInstitution = (query) => {
  const [fetchManyInstitutionResponse, setFetchManyInstitutionResponse] = useState(null);
  const [fetchManyInstitutionError, setFetchManyInstitutionError] = useState(null);
  const [fetchManyInstitutionLoading, setFetchManyInstitutionLoading] = useState(false);
  
  useEffect(() => {
    fetchManyInstitution(query)
      .then(res => {
        setFetchManyInstitutionLoading(false);
        setFetchManyInstitutionResponse(res);
      })
      .catch(error => {
        setFetchManyInstitutionLoading(false);
        setFetchManyInstitutionError(error.message);
      })
  }, [query])
  
  return {
    fetchManyInstitutionResponse,
    fetchManyInstitutionError,
    fetchManyInstitutionLoading,
  }
}