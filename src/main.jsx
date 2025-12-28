import React from 'react';
import InnovationLabAfrica from './InnovationLabAfrica';
import AdminCMS from './AdminCMS';

const App = () => {
  const isAdminRoute = window.location.pathname.startsWith('/admin');
  
  if (isAdminRoute) {
    return <AdminCMS />;
  }
  
  return <InnovationLabAfrica />;
};

export default App;