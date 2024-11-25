import "@esri/calcite-components/dist/components/calcite-alert";
import { 
    CalciteAlert
  } from "@esri/calcite-components-react";

  
export const logError = (error, info) => {
    // Do something with the error, e.g. log to an external API
    console.log("come from ErrorBoundary: log into the system log", error, info);

  };
export const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
      <CalciteAlert
      kind="danger"
      icon={true}
      scale="m"
      open={true}
       >
      <div slot="title">Oops!</div>
      <div slot="message">Custom error display: {error?.message}</div>
      <button onClick={resetErrorBoundary}>Try again</button>
    </CalciteAlert>
    );
};

export const resetErrorBoundary = () => {
    console.log("come from ErrorBoundary: reset the error boundary");
};