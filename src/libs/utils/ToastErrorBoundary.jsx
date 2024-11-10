// components/ErrorHandler.jsx
import React, { Component } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Base Error Boundary with Toast
export  class ToastErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Show error toast
    toast.error(error.message || 'An unexpected error occurred', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  render() {
    return this.props.children;
  }
}

// HOC for wrapping components
export const withToastErrorBoundary = (WrappedComponent , fallback) => {
  return function WithToastErrorBoundary(props) {
    return (
      <ToastErrorBoundary fallback={fallback}>
        <WrappedComponent {...props} />
      </ToastErrorBoundary>
    );
  };
};

// Custom hook for error handling with toast
export const useToastError = () => {
  const handleError = React.useCallback((error) => {
    toast.error(error.message || 'An unexpected error occurred', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  return handleError;
};

// Custom hook for success messages
export const useToastSuccess = () => {
  const showSuccess = React.useCallback((message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  return showSuccess;
};