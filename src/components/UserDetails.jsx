import React from "react";
import { Link } from "react-router-dom";

const UserDetails = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
          {user.name}
        </h2>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700">
              <span className="font-semibold">📧 Email:</span> {user.email}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">📱 Phone:</span> {user.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">🌐 Website:</span>{" "}
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {user.website}
              </a>
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              <span className="font-semibold">🏢 Company:</span>{" "}
              {user.company?.name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">📍 Address:</span>
              <br />
              {user.address?.street}, {user.address?.suite}
              <br />
              {user.address?.city}, {user.address?.zipcode}
            </p>
            {user.address?.geo && (
              <p className="text-gray-700">
                <span className="font-semibold">🗺️ Geo:</span>{" "}
                {user.address.geo.lat}, {user.address.geo.lng}
              </p>
            )}
          </div>
        </div>

        {/* Back button */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
