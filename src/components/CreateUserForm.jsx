import React, { useState, useContext } from "react";
import { UsersContext } from "../context/UsersContext";

const CreateUserForm = () => {
  const { addUser } = useContext(UsersContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: { name: "" },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "company") {
      setFormData({ ...formData, company: { name: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const newUser = {
      id: Date.now(),
      ...formData,
    };

    addUser(newUser);

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: { name: "" },
    });
  };

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <h5 className="card-title mb-3">➕ Create New User</h5>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <input
                type="text"
                name="company"
                className="form-control"
                placeholder="Company Name"
                value={formData.company.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4 text-end">
            <button type="submit" className="btn btn-success">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
