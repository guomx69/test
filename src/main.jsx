import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

"use client";

import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback, logError, resetErrorBoundary } from './libs/utils/errorFallback';


import App from './App.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <ErrorBoundary FallbackComponent={ErrorFallback} onError={logError} onReset={resetErrorBoundary}>    
           <BrowserRouter>
              <App />
           </BrowserRouter>
      </ErrorBoundary>
            
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       />
   
    </StrictMode>
)
