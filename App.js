import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TodaysPaper from './components/TodaysPaper';
import AdminDashboard from './components/admin/AdminDashboard';
import ManageArticles from './components/admin/ManageArticles';
import ManageCategories from './components/admin/ManageCategories';
import ManageComments from './components/admin/ManageComments';
import Login from './components/admin/Login'; // Add a login page component for admin

function App() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false); // Track authentication state

    const authenticate = (authStatus) => {
        setIsAuthenticated(authStatus);
    };

    // Function to protect admin routes
    const ProtectedRoute = ({ children }) => {
        return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/todayspaper" element={<TodaysPaper />} />
                
                {/* Admin login route */}
                <Route path="/admin/login" element={<Login onAuthenticate={authenticate} />} />

                {/* Protected Admin routes */}
                <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                <Route path="/admin/articles" element={<ProtectedRoute><ManageArticles /></ProtectedRoute>} />
                <Route path="/admin/categories" element={<ProtectedRoute><ManageCategories /></ProtectedRoute>} />
                <Route path="/admin/comments" element={<ProtectedRoute><ManageComments /></ProtectedRoute>} />
            </Routes>
        
        </Router>
    );
}

export default App;
