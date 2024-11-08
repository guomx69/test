import "@esri/calcite-components/dist/components/calcite-loader";
import { CalciteLoader } from '@esri/calcite-components-react'; //"@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "./LoadingSpinner.css";

export const LoadingSpinner = () => {
  return (
     <div className="overlay">
      <CalciteLoader
        scale="l"
        type="indeterminate"
        label="Loading"
        text="Loading..."
      />
     </div>
      
  );
};

export default LoadingSpinner;