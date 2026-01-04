// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isAuth }) {
  // isAuth: true یا false
  if (!isAuth) {
    // که login نه وي، SignUp ته redirect کړه
    return <Navigate to="/login" replace />;
  }

  return children; // که login وي، بچونه component render شي
}

export default ProtectedRoute;
