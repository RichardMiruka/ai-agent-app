// This code is the entry point of the React application.
// It imports the necessary modules and stylesheets.
// It uses React's StrictMode to help identify potential problems in the application.
// It creates a root element using `createRoot` from `react-dom/client`.
// Finally, it renders the `App` component into the root element.
// The `App` component is the main component of the application.
// It contains the routing logic and the main layout of the application.
// The `index.css` and `style.css` files contain the global styles for the application.
// The `index.css` file is the default CSS file created by Create React App.
// The `style.css` file contains the custom styles for the application.
// The `App` component is imported from the `App.jsx` file.
// The `App.jsx` file contains the main logic for the application.
// The `App` component is the main component of the application.
// It contains the routing logic and the main layout of the application.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './style.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
