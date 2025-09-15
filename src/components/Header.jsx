import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">User Dashboard</h1>
        <Link to="/" className="hover:underline">Home</Link>
      </div>
    </header>
  );
};

export default Header;
