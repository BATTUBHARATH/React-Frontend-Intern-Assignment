import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UsersContext } from "../context/UsersContext";

const UserPage = () => {
  const { id } = useParams();
  const { users } = useContext(UsersContext);

  const user = users.find((u) => String(u.id) === id);

  if (!user) {
    return (
      <div className="container py-5 text-center">
        <h3 className="text-danger">⚠️ User not found</h3>
        <Link to="/" className="btn btn-primary mt-3">
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">{user.name}</h3>
          <small>{user.company?.name}</small>
        </div>
        <div className="card-body">
          <h5 className="mb-3">👤 Contact Info</h5>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website || "N/A"}</p>

          <hr />

          <h5 className="mb-3">🏠 Address</h5>
          <p>
            {user.address?.street}, {user.address?.suite},<br />
            {user.address?.city} - {user.address?.zipcode}
          </p>

          {user.address?.geo && (
            <p>
              <strong>Geo:</strong> Lat {user.address.geo.lat}, Lng {user.address.geo.lng}
            </p>
          )}
        </div>
        <div className="card-footer text-end">
          <Link to="/" className="btn btn-secondary">
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
