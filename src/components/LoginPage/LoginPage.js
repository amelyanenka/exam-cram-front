import React from 'react';

const LoginPage = ({ onLogin }) => {
  const handleLogin = () => {
    // Perform authentication logic here and call onLogin when successful
    onLogin();
    return true;
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
