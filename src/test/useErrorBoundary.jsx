// Error boundary hook implementation
import { useState } from "react";
export const useErrorBoundary=()=> {
    const [error, setError] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    
    const handleCatch = (error) => {
      setError(error);
      setShowAlert(true);
    };
    
    const resetError = () => {
      setError(null);
      setShowAlert(false);
    };
    
    return [error, showAlert, handleCatch, resetError];
  }