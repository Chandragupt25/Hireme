import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/CSS/Login.css';
import videoBg from '../assets/bgvideo.mp4';

export default function Login() {
  const [role, setRole] = useState('worker');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === 'worker') navigate('/worker/dashboard');
    else navigate('/hire/dashboard');
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted playsInline className="login-video">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="login-card">
        <h2 className="login-title">Login as {role === 'worker' ? 'Worker' : 'Hire'}</h2>
        <div className="role-buttons">
          <button
            className={`role-btn ${role === 'worker' ? 'active' : ''}`}
            onClick={() => setRole('worker')}
          >
            Worker
          </button>
          <button
            className={`role-btn ${role === 'hire' ? 'active' : ''}`}
            onClick={() => setRole('hire')}
          >
            Hire
          </button>
        </div>
        <input type="text" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button onClick={handleLogin} className="login-btn">Login</button>
      </div>
    </div>
  );
}
