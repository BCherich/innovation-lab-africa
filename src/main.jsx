<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import InnovationLabAfrica from './InnovationLabAfrica';
import AdminCMS from './AdminCMS';

const App = () => {
  const isAdminRoute = window.location.pathname.startsWith('/admin');

  if (isAdminRoute) {
    return <AdminCMS />;
  }

  return <InnovationLabAfrica />;
};

// Render the App into the DOM
const rootElement = document.getElementById('root');
if (!rootElement) {
  // Helpful fallback / debug message in case index.html doesn't have the root element
  console.error('Root element not found: make sure your index.html contains <div id="root"></div>');
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

=======
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

>>>>>>> 2614343d69ac03cc66875b423a5995a61271dd96
export default App;