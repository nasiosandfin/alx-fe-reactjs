import React, { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.username.trim()) errs.username = "Username is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    if (!formData.password) errs.password = "Password is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Simulate API call
    console.log("Controlled submit:", formData);
    alert("Controlled form submitted (check console)");
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 420 }}>
      <div>
        <label>Username</label>
        <input name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      </div>

      <div>
        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>

      <div>
        <label>Password</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>

      <button type="submit">Register (Controlled)</button>
    </form>
  );
}
