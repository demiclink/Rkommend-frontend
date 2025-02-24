import { useState } from 'react';
import { signinAdmin } from '../lib/api-client/signin-admin';

export const useAdminSignin = (cb) => {
  const [adminSigninResponse, setAdminSigninData] = useState(null);
  const [adminSigninError, setAdminSigninError] = useState(null);
  const [adminSigninLoading, setAdminSigninLoading] = useState(false);
  
  const startAdminSignin = async (body) => {
    setAdminSigninLoading(true)
    try { 
      const data = await signinAdmin(body);
      setAdminSigninLoading(false);
      setAdminSigninData(data);
      if (cb?.onSuccessCallback) cb.onSuccessCallback(data);
    } catch(error) {
      setAdminSigninLoading(false);
      setAdminSigninError(error.message);
      if (cb?.onErrorCallback) cb.onErrorCallback(error);
    }
  }
  
  return {
    adminSigninResponse,
    adminSigninError,
    adminSigninLoading,
    startAdminSignin
  }
}