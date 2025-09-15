import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // add user (client side only)
  const addUser = (newUser) => {
    setUsers((prev) => [...prev, { id: Date.now(), ...newUser }]);
  };

  return (
    <UsersContext.Provider value={{ users, setUsers, addUser, loading }}>
      {children}
    </UsersContext.Provider>
  );
};
