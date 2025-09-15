import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import CreateUserForm from "../components/CreateUserForm";
import Header from "../components/Header";

const Dashboard = () => {
  const { loading } = useContext(UsersContext);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto p-6">
        {/* Search + Create User */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        <CreateUserForm />

        {/* User List */}
        {loading ? (
          <p className="text-center text-gray-600 mt-6 animate-pulse">
            Loading users...
          </p>
        ) : (
          <UserList search={search} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
