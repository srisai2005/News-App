import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirm) {
      setMessage('Please fill in all fields.');
    } else if (password !== confirm) {
      setMessage('Passwords do not match.');
    } else {
      setMessage('Registering...');
      setTimeout(() => {
        setMessage('Registration successful! (Demo only)');
      }, 1000);
    }
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh'
    }}>
      <h2>Register for NewsMate</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px', background: '#f1f5f9', padding: '2rem', borderRadius: '10px', boxShadow: '0 2px 8px #e0e7ff'
      }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
        />
        <button type="submit" style={{
          background: '#6366f1', color: '#fff', padding: '0.75rem', borderRadius: '6px', border: 'none', fontWeight: 'bold'
        }}>
          Register
        </button>
        {message && <div style={{ color: '#334155', marginTop: '0.5rem', textAlign: 'center' }}>{message}</div>}
      </form>
    </div>
  );
}

export default Register;