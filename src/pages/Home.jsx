import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoBg from '../assets/bgvideo.mp4';
import '../pages/CSS/Home.css';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <video autoPlay loop muted playsInline preload='auto' className="home-video">
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="home-content">
        <h2 >Hire-me!!! </h2>
        <h1 className="home-title">Welcome to the Platform</h1>
        <div className="home-buttons">
          <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
          <button className="btn-signup" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}