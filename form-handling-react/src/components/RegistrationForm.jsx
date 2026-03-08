// src/components/RegistrationForm.jsx
import React, { useState } from 'react';

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!username.trim()) e.username = 'Username required';
    if (!email) e.email = 'Email required';
    if (!password) e.password = 'Password required';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setStatus(null);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    try {
      const res = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Registration failed');
      setStatus('Registration successful');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setStatus(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label className="label">Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>

      <div>
        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <label className="label">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>

      {status && <div style={{ marginTop: 12 }}>{status}</div>}
    </form>
  );
}
