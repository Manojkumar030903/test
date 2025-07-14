import React, { useState } from 'react';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // Simple fake login
    if (username === 'user' && password === 'pass') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input id='username'
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
      id='password'
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button name='login' type="submit">Login</button>
    </form>
  );
}
