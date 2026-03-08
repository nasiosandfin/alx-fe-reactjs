import React, { useState } from 'react';

export default function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!username.trim()) e.username = 'Username required';
    if (!email.trim()) e.email = 'Email required';
    if (!password) e.password = 'Password required';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    // mock API call
    const res = await fetch('https://reqres.in/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password }),
    });
    // handle response...
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username<input value={username} onChange={e=>setUsername(e.target.value)} /></label>
      {errors.username && <div style={{color:'red'}}>{errors.username}</div>}
      <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} /></label>
      {errors.email && <div style={{color:'red'}}>{errors.email}</div>}
      <label>Password<input type="password" value={password} onChange={e=>setPassword(e.target.value)} /></label>
      {errors.password && <div style={{color:'red'}}>{errors.password}</div>}
      <button type="submit">Register</button>
    </form>
  );
}
