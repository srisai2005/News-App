import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="homepage-container" style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', padding: '2rem'
    }}>
      <img src="https://img.icons8.com/color/96/news.png" alt="NewsMate Logo" style={{ marginBottom: '1rem' }} />
      <h1 style={{ color: '#1e293b', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Welcome to NewsMate!</h1>
      <p style={{ color: '#334155', fontSize: '1.2rem', maxWidth: '500px', textAlign: 'center', marginBottom: '2rem' }}>
        Stay updated with the latest news from around the world. Sign up or log in to personalize your news feed and never miss an important update!
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => navigate('/Home')} style={{
          background: '#e0e7ff', color: '#6366f1', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid #6366f1', boxShadow: '0 2px 8px rgba(99,102,241,0.05)'
        }}>News Update</button>
        <button onClick={() => navigate('/register')} style={{
          background: '#6366f1', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 2px 8px rgba(99,102,241,0.1)'
        }}>Get Started</button>
        <button onClick={() => navigate('/login')} style={{
          background: '#fff', color: '#6366f1', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid #6366f1', boxShadow: '0 2px 8px rgba(99,102,241,0.05)'
        }}>Login</button>
      </div>
    </div>
  )
}

export default HomePage