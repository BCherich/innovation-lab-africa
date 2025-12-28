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
  console.error('Root element not found: make sure your index.html contains <div id="root"></div>');
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;