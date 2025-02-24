import { createContext } from 'react';

export const UserContext = createContext({
  user: { role: "", email: "", id: "" },
  setUser: (user) => { this.setUser(user) }
});
