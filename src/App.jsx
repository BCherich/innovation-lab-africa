import React from 'react';
import InnovationLabAfrica from './InnovationLabAfrica';
import AdminCMS from './AdminCMS';

const App = () => {
  // Check if we're on the admin route
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  
  // Render admin panel or main website
  if (isAdminRoute) {
    return <AdminCMS />;
  }
  
  return <InnovationLabAfrica />;
};

export default App;
