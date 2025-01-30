import React, { useState, useEffect } from 'react';
import {
    CalciteLabel
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-label';

import ProductionListRecord from './subComps/ProductionListRecord';
// import ProductionListLease from './subComps/ProductionListLease';
// import ProductionList from './subComps/ProductionList';

//import './LeaseProduction.css';
//import './LeaseProductionAnnual.css';


// Add this mock data for annual production
// const mockAnnualProductionData = {
//         leaseNumber: "1350/3072344",
//         priorCumulative: {
//             oil: "1267",
//             gas: "1267",
//             water: "1267",
//             injectionOil: "1267",
//             injectionGas: "1267",
//             injectionWater: "1267"
//         },
//         records: [
//             {
//                 id: "00001",
//                 source: "IHS",
//                 year: "1971",
//                 oil: "264",
//                 gas: "",
//                 water: "",
//                 injectionOil: "",
//                 injectionGas: "",
//                 injectionWater: "",
//                 daysOn: ""
//             },
//             {
//                 id: "00002",
//                 source: "IHS",
//                 year: "1972",
//                 oil: "355",
//                 gas: "",
//                 water: "",
//                 injectionOil: "",
//                 injectionGas: "",
//                 injectionWater: "",
//                 daysOn: ""
//             }
//         ],
//         totals: {
//             oil: "20600",
//             gas: "0",
//             water: "0",
//             injectionOil: "0",
//             injectionGas: "0",
//             injectionWater: "0",
//         }
//     }
// Add mock lease production data keyed by leaseProductionId


const ProductionPeriodNoLeaseNoRd = ({periodType, tab, data}) => {
    const actualData =data; //mockAnnualProductionData;// data || mockAnnualProductionData;

    const LeaseProductionPeriodTitle = periodType === "annual" ? " Annual Production" : periodType === "monthly" ? "Monthly Production" : "Last 12 Months Production";
    const isCumulative = periodType === "last12Months" ? false : true;
    const isMonthly = periodType === "annual" ? false : true;
    


    return (
        
                <div className="production-detail-container">
                            <CalciteLabel class="section-title">
                               {LeaseProductionPeriodTitle} for Lease Production ID: {actualData.leaseNumber}
                            </CalciteLabel>
                            <ProductionListRecord 
                                selectedWell={actualData} 
                                isCumulative={isCumulative}
                                isMonthly={isMonthly}
                            />
                    </div>
    );
};

export default ProductionPeriodNoLeaseNoRd;
