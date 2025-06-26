import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkerLayout({ children }) {
  return (
    <div>
      <nav className="bg-orange-200 p-4 flex gap-4">
        <Link to="/worker/dashboard">Home</Link>
        <Link to="/worker/jobs">Jobs</Link>
        <Link to="/worker/profile">Profile</Link>
      </nav>
      {children}
    </div>
  );
}