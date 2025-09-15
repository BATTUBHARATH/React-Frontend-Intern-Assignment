import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm border-0">
        <div className="card-body d-flex flex-column">
          {/* Avatar initials */}
          <div className="d-flex align-items-center mb-3">
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                 style={{ width: "45px", height: "45px" }}>
              {user.name.charAt(0)}
            </div>
            <div className="ms-3">
              <h5 className="card-title mb-1">{user.name}</h5>
              <small className="text-muted">{user.company?.name}</small>
            </div>
          </div>

          <p className="mb-1"><strong>Email:</strong> {user.email}</p>
          <p className="mb-3"><strong>Phone:</strong> {user.phone}</p>

          <Link
            to={`/users/${user.id}`}
            className="btn btn-primary mt-auto"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
