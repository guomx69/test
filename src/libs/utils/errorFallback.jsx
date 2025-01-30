import "@esri/calcite-components/dist/components/calcite-alert";
import "@esri/calcite-components/dist/components/calcite-button";
import { 
    CalciteAlert,
    CalciteButton
  } from "@esri/calcite-components-react";

const reLoadPage = () => {
    console.log("come from ErrorFallback: reload the page");
    window.location.reload();
  } 
/*
logError is a function passed to the ErrorBoundary component for event onError and is called when an error occurs
*/
export const logError = (error, info) => {
    // Do something with the error, e.g. log to an external API
    console.error("AAAAA:come from ErrorBoundary: log into the system log", error, info);

};

/*
//resetErrorBoundary is a function passed to the ErrorBoundary component for event onReset
//it is used in our custom ErrorFallback component to reset the error boundary and reload the page
*/
export const resetErrorBoundary = () => { 
  console.error("AAAAA:come from ErrorBoundary onReset Event: reset the error boundary");
  //reLoadPage();
};

/*
//ErrorFallback is a function passed to the ErrorBoundary component for FallbackComponent
//it is used for custom error display
*/
export const ErrorFallback = ({ error, resetErrorBoundary}) => {  
    return (
      <CalciteAlert
      kind="danger"
      icon={true}
      scale="m"
      open={true}
       >
      <div slot="title">Oops!</div>
      <div slot="message">Custom error display: {error?.message}</div>
      <div slot="actions-end">
        <CalciteButton onClick={resetErrorBoundary}>Reload Page</CalciteButton>
      </div>
    </CalciteAlert>
    );
};

