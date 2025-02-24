import { useContext } from "react"
import { UserContext } from "../contexts/user.context"

export const useAuth = () => {
  // storage key
  const KEY = import.meta.env.VITE_AUTH_LOCAL_STORAGE_KEY
  const { user, setUser } = useContext(UserContext)
  /**
  * Set user and also store user data in browser's local storage
  * @param {*} user user data in response.data
  */
  const setAndPersistAuth = (user) => {
    // storage value
    const value = JSON.stringify(user)
    // store user auth data in browser local storage
    localStorage.setItem(KEY, value)
    // update state
    setUser(user)
  }
  /**
  * Gets user data either from browser's local storage(if exist) or context 
  * @returns current signed in user data
  */
  const getAuth = () => {
    // get stringified value from browser's local storage
    const value = localStorage.getItem(KEY)
    // if not found return user from context as is
    if (!value) return user;
    try {
      // parse the stringified data 
      const auth = JSON.parse(value)
      // return auth data if valid else return user from context
      return auth.id ? auth : user;
    } catch(error) {
      // log error
      console.error(error)
      // then return user data context 
      return user
    }
  }
  
  return { user, setUser, getAuth, setAndPersistAuth }
}