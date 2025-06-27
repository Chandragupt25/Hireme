import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/CSS/Register.css'; // Make sure this file is created
import videoBg from '../assets/bgvideo.mp4';

export default function Register() {
  const [role, setRole] = useState('worker');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    pincode: '',
    profession: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    const {
      name, email, phone, city, state, pincode,
      profession, password, confirmPassword
    } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert('Please fill all required fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (role === 'worker' && (!city || !state || !pincode || !profession)) {
      alert('Please complete all worker fields');
      return;
    }

    if (role === 'worker') navigate('/worker/dashboard');
    else navigate('/hire/dashboard');
  };

  return (
    <div className="register-container">
      <video autoPlay loop muted playsInline className="register-video">
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="register-card">
        <h2 className="register-title">Register as {role === 'worker' ? 'Worker' : 'Hire'}</h2>

        <div className="register-role-buttons">
          <button
            className={`register-role-btn ${role === 'worker' ? 'active' : ''}`}
            onClick={() => setRole('worker')}
          >
            Worker
          </button>
          <button
            className={`register-role-btn ${role === 'hire' ? 'active' : ''}`}
            onClick={() => setRole('hire')}
          >
            Hire
          </button>
        </div>

        <input name="name" type="text" placeholder="Name" className="register-input" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" className="register-input" onChange={handleChange} />
        <input name="phone" type="tel" placeholder="Phone Number" className="register-input" onChange={handleChange} />

        {role === 'worker' && (
          <div className="register-worker-grid">
            <input name="city" type="text" placeholder="City" className="register-input" onChange={handleChange} />
            <input name="state" type="text" placeholder="State" className="register-input" onChange={handleChange} />
            <input name="pincode" type="text" placeholder="Pincode" className="register-input" onChange={handleChange} />
            <input name="profession" type="text" placeholder="Profession" className="register-input" onChange={handleChange} />
          </div>
        )}

        <input name="password" type="password" placeholder="Password" className="register-input" onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" className="register-input" onChange={handleChange} />

        <button onClick={handleRegister} className="register-btn">Register</button>

         <p className="register-login-text">
          Already registered? <span className="login-link" onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
}
