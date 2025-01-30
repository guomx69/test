// Example usage component
import {useToastError, useToastSuccess } from "./ToastErrorBoundary";
import { toast, ToastContainer } from 'react-toastify';
const ExampleComponent = () => {
    const handleError = useToastError();
    const showSuccess = useToastSuccess();
  
    const handleApiCall = async () => {
      try {
        // Simulated API call
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error('Failed to fetch data');
        
        // Show success message
        showSuccess('Data fetched successfully!');
      } catch (error) {
        handleError(error);
      }
    };
  
    return (
      <button onClick={handleApiCall}>
        Fetch Data
      </button>
    );
  };
  
 
  
  // Example of async error handling
  const submitData = async (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: 200, message: 'Form submitted successfully!' });
      }, 1000);
    });
  };
  const AsyncComponent = () => {
    const handleError = useToastError();
    const showSuccess = useToastSuccess();
  
    const handleSubmit = async (data) => {
      try {
        // API call simulation
        const response = await submitData(data);
        showSuccess('Form submitted successfully!');
        return response;
      } catch (error) {
        handleError(error);
        throw error; // Re-throw if you need to handle it further up
      }
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <button type="submit">
                Submit Form
            </button>
        </form>
    ); 
  };
  

 
  
  // Custom toast styles
  const customTestToastStyles = {
    error: {
      style: {
        background: '#FEE2E2',
        color: '#991B1B',
        border: '1px solid #F87171',
      },
      progressStyle: {
        background: '#F87171',
      },
    },
    success: {
      style: {
        background: '#DCFCE7',
        color: '#166534',
        border: '1px solid #4ADE80',
      },
      progressStyle: {
        background: '#4ADE80',
      },
    },
  };
  
  // Example of a component with custom toast styles
  const StyledToastComponent = () => {
    const handleClick = () => {
      toast.error('Custom styled error message', {
        style: customTestToastStyles.error.style,
        progressStyle: customTestToastStyles.error.progressStyle,
      });
  
      toast.success('Custom styled success message', {
        style: customTestToastStyles.success.style,
        progressStyle: customTestToastStyles.success.progressStyle,
      });
    };
  
    return <button onClick={handleClick}>Show Styled Toasts</button>;
  };


  

   // Wrap your app with ToastContainer
  export const AppTest = () => {
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ExampleComponent />
        <AsyncComponent />
        <StyledToastComponent />    
      </>
    );
  };