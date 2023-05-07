import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isAuthenticated, onLogout }) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/main">Main Page</Link>
        </li>
        <li>
          <Link to="/my-exams">My Exams Page</Link>
        </li>
        <li>
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
