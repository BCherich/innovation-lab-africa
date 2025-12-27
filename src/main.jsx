import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

)
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
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

)
