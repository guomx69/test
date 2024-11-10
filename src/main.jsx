import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from './cores/contexts/AuthContext.jsx'
import { ToastErrorBoundary } from './libs/utils/ToastErrorBoundary.jsx'

//import  ErrorBoundary  from './libs/utils/ErrorBoundary.jsx'
// import { AlertExamples } from './test/AlertExamples.jsx'
// import { AppTest } from './test/test.jsx'
//import { AppTest } from './test/testErrorBoundaryWithRoast.jsx'

import App from './App.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastErrorBoundary><App /></ToastErrorBoundary>
       
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

      </AuthProvider>
    </BrowserRouter>
    {/* <AppTest /> */}
    </StrictMode>
)
