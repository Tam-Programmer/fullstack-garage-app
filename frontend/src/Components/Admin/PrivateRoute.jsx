import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('LoggedIn');
    const role = localStorage.getItem('Role');

    if (!loggedIn || loggedIn !== 'true' || role !== 'admin') {
      navigate('/');
    }
  }, [navigate]);

  return localStorage.getItem('LoggedIn') && localStorage.getItem('role') === 'admin' ? children : null;
};

export default PrivateRoute;