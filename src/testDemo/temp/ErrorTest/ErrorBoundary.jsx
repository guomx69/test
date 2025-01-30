// components/ErrorBoundary.jsx
import React, { Component } from 'react';

import "@esri/calcite-components/dist/components/calcite-button"
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-alert";

import { 
  CalcitePanel, 
  CalciteButton, 
  CalciteAlert
} from "@esri/calcite-components-react";


// Class component for Error Boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    // Log error to error reporting service
    console.log('Log error to error reporting service:', error, errorInfo);
    this.setState({
      errorInfo
    });
  }
  resetError = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  }
  render() {
    if (this.state.hasError) {

      if (this.props.fallback) {
          return this.props.fallback;
        }
     
      return (
        <CalcitePanel padding="none">
          <CalciteAlert
            open={this.state.hasError}
            kind="danger"
            icon="exclamation-mark-triangle"
            label="Error Alert"
            placement="bottom"
            scale="l"
            textAlign="center"
          >
            <div slot="title">Something went wrong</div>
            <div slot="message">{this.state.error?.message}</div>
            <CalciteButton
              slot="link"
              kind="danger"
              appearance="outline"
              onClick={this.resetError}
              scale="l"
            >
              Try again
            </CalciteButton>
          </CalciteAlert>
        </CalcitePanel>
      );
    }
    
    return this.props.children;
   // return this.props.children;
  }
}
// Higher Order Component for easy wrapping
export const withErrorBoundary = (WrappedComponent, fallback) => {
    return function WithErrorBoundary(props) {
      return (
        <ErrorBoundary fallback={fallback}>
          <WrappedComponent {...props} />
        </ErrorBoundary>
      );
    };
  };
  
  // Hook for handling errors in async operations
export const useErrorHandler = (initialError = null) => {
    const [error, setError] = React.useState(initialError);
  
    const handleError = React.useCallback((error) => {
      setError(error);
      // You can add additional error handling logic here
    }, []);
    
    return [error, handleError];
  };
  
export default ErrorBoundary;
// return (
//     <div className="p-4">
//       <Alert variant="destructive">
//         <AlertTitle>Something went wrong</AlertTitle>
//         <AlertDescription>
//           {this.props.fallback ?? (
//             <div>
//               <p>{this.state.error?.message}</p>
//               <details className="mt-2 text-sm">
//                 <summary>Error Details</summary>
//                 <pre className="mt-2 whitespace-pre-wrap">
//                   {this.state.errorInfo?.componentStack}
//                 </pre>
//               </details>
//             </div>
//           )}
//         </AlertDescription>
//       </Alert>
//     </div>
//   );