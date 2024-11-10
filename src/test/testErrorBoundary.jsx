import React from "react";
import ErrorBoundary, { withErrorBoundary, useErrorHandler } from "../libs/utilities/ErrorBoundary";
import { 
  CalciteAlert
} from "@esri/calcite-components-react";

// Example usage:
// 1 Basic component with error boundary
const RiskyComponent = () => {
  const [shouldError, setShouldError] = React.useState(false);

  if (shouldError) {
    throw new Error('Something went wrong!');
  }

  return (
    <div>
      <button onClick={() => setShouldError(true)}>
        Trigger Error
      </button>
    </div>
  );
};

// Wrap with HOC
const SafeRiskyComponent = withErrorBoundary(RiskyComponent);

// 2. Custom error handling with async operations
const AsyncComponent = () => {
  const [error, handleError] = useErrorHandler();
  const [data, setData] = React.useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setData(data);
    } catch (err) {
      handleError(err);
    }
  };
  if (error) {
    return (
       <CalciteAlert
          kind="danger"
          icon={true}
          scale="m"
          open={true}
            >
          <div slot="title">Danger Alert</div>
          <div slot="message">{error.message}</div>
       </CalciteAlert>
    );
  }
  

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

// 3. Example with custom fallback
const CustomFallback = ({ error }) => (
  
  <CalciteAlert
  kind="danger"
  icon={true}
  scale="m"
  open={true}
   >
  <div slot="title">Oops!</div>
  <div slot="message">Custom error display: {error?.message}</div>
</CalciteAlert>
);

const ComponentWithCustomError = withErrorBoundary(RiskyComponent, <CustomFallback />);// 3. App-wide error boundary usage
export const AppTest = () => {
  return (
    
      <div className="app">
        <ErrorBoundary>
            <RiskyComponent />
        </ErrorBoundary>
        <SafeRiskyComponent />
        <AsyncComponent />
        <ComponentWithCustomError />
        
      </div>

  );
};