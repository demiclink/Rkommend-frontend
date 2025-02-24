import { useState } from "react";
import { UserContext } from "../contexts/user.context";

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    role: "", 
    email: "", 
    id: ""
  })
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
