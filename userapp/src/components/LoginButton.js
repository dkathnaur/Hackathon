import React from 'react';
import LogoutButton from './LogoutButton'; 
const Dashboard = ({ username, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      
      <LogoutButton onLogout={onLogout} /> 
    </div>
  );
};

export default Dashboard;
