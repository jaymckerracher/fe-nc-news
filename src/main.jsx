import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

import { ErrorMessageProvider, ErrorClassProvider } from './contexts/ErrorContext.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
    <ErrorMessageProvider>
    <ErrorClassProvider>
      <App />
    </ErrorClassProvider>
    </ErrorMessageProvider>
    </UserProvider>
  </BrowserRouter>
)
