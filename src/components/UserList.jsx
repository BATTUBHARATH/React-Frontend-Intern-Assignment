import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import UserCard from "./UserCard";

const UserList = ({ search }) => {
  const { users } = useContext(UsersContext);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filtered.length === 0) {
    return <p className="text-center text-danger">❌ No users found</p>;
  }

  return (
    <div className="row">
      {filtered.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
