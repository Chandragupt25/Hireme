import React from 'react';
import { Link } from 'react-router-dom';

export default function HireLayout({ children }) {
  return (
    <div>
      <nav className="bg-blue-200 p-4 flex gap-4">
        <Link to="/hire/dashboard">Home</Link>
        <Link to="/hire/post-job">Post Job</Link>
        <Link to="/hire/applicants">Applicants</Link>
      </nav>
      {children}
    </div>
  );
}