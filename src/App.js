import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import MyExamsPage from './components/MyExamsPage/MyExamsPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NavigationBar from './components/NavigationBar/NavigationBar';

import './App.css';
import { useState } from 'react';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <NavigationBar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/main" element={<MainPage />} />
          <Route path="/my-exams" element={<MyExamsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
