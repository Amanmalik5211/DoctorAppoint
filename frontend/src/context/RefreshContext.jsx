
import React, { createContext, useState, useContext } from 'react';
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = async (userId) => {
    const response = await fetch(`/api/user/${userId}`);
    const userData = await response.json();
    setUser(userData);
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
