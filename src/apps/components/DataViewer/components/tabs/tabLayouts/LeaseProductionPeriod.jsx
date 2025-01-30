import React, { useState, useEffect } from 'react';
import {
    CalciteLabel
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-label';

import ProductionListRecord from './subComps/ProductionListRecord';
import ProductionListLease from './subComps/ProductionListLease';
import ProductionList from './subComps/ProductionList';

//import './LeaseProduction.css';
//import './LeaseProductionAnnual.css';

// const mockCompletionData = {
//     api: "3501535508",
//     completions: [
//         {
//             id: "00001",
//             checked: false,
//             completion: "0000",
//             sequence: "1",
//             leaseProductionId: "1350/3012509",
//             current: "Y",
//             source: "IHS",
//             status: "ABD-OIL",
//             leaseName: "CONTINENTAL",
//             wellNumber: "",
//             producingZone: "FORTUNA",
//             operatorName: "KAMCO HOT",
//             productionPeriodData: {
//                 leaseWellMembers: [
//                     { apiNumber: "25015550000056", status: "ABD-OIL" },
//                     { apiNumber: "25015550250056", status: "ABD-OIL" },
//                     { apiNumber: "25015550500056", status: "ABD-OIL" }
//                 ],
//                 priorCumulative: {
//                     oil: "345566",
//                     gas: "345566",
//                     water: "345566",
//                     injectionOil: "345566",
//                     injectionGas: "345566",
//                     injectionWater: "345566"
//                 },
//                 records: [
//                     {
//                         id: "00001",
//                         source: "IHS",
//                         year: "1971",
//                         oil: "264",
//                         gas: "",
//                         water: "",
//                         injectionOil: "",
//                         injectionGas: "",
//                         injectionWater: "",
//                         daysOn: ""
//                     },
//                     {
//                         id: "00002",
//                         source: "IHS",
//                         year: "1972",
//                         oil: "355",
//                         gas: "",
//                         water: "",
//                         injectionOil: "",
//                         injectionGas: "",
//                         injectionWater: "",
//                         daysOn: ""
//                     },
//                     {
//                         id: "00003",
//                         source: "IHS",
//                         year: "1973",
//                         oil: "265",
//                         gas: "",
//                         water: "",
//                         injectionOil: "",
//                         injectionGas: "",
//                         injectionWater: "",
//                         daysOn: ""
//                     },
//                     {
//                         id: "00004",
//                         source: "IHS",
//                         year: "1974",
//                         oil: "175",
//                         gas: "",
//                         water: "",
//                         injectionOil: "",
//                         injectionGas: "",
//                         injectionWater: "",
//                         daysOn: ""
//                     },
//                     {
//                         id: "00005",
//                         source: "IHS",
//                         year: "1975",
//                         oil: "267",
//                         gas: "",
//                         water: "",
//                         injectionOil: "",
//                         injectionGas: "",
//                         injectionWater: "",
//                         daysOn: ""
//                     }
//                 ],
//                 totals: {
//                     oil: "20600",
//                     gas: "0",
//                     water: "0",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0",
//                 }
//             }
//         },
//         {
//             id: "00002",
//             checked: false,
//             completion: "0000",
//             sequence: "2", 
//             leaseProductionId: "1350/3072344",
//             current: "N",
//             source: "IHS",
//             status: "ABD-OIL",
//             leaseName: "CONTINENTAL",
//             wellNumber: "1",
//             producingZone: "FORTUNA",
//             operatorName: "BOREN JAM",
//             productionPeriodData:{
//                 leaseWellMembers: [
//                 { apiNumber: "25015550000000", status: "ABD-OIL" },
//                 { apiNumber: "25015550250000", status: "ABD-OIL" },
//                 { apiNumber: "25015550500000", status: "ABD-OIL" }
//             ],
//             priorCumulative: {
//                 oil: "1267",
//                 gas: "1267",
//                 water: "1267",
//                 injectionOil: "1267",
//                 injectionGas: "1267",
//                 injectionWater: "1267"
//             },
//             records: [
//                 {
//                     id: "00001",
//                     source: "IHS",
//                     year: "1971",
//                     oil: "264",
//                     gas: "",
//                     water: "",
//                     injectionOil: "",
//                     injectionGas: "",
//                     injectionWater: "",
//                     daysOn: ""
//                 },
//                 {
//                     id: "00002",
//                     source: "IHS",
//                     year: "1972",
//                     oil: "355",
//                     gas: "",
//                     water: "",
//                     injectionOil: "",
//                     injectionGas: "",
//                     injectionWater: "",
//                     daysOn: ""
//                 }
//             ],
//             totals: {
//                 oil: "20600",
//                 gas: "0",
//                     water: "0",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0",
//                 }
//             }
//         }
//     ]
// };

// Add this mock data for annual production
// const mockAnnualProductionData = {
//     "1350/3012509": {
//         leaseNumber: "1350/3012509",
        
//     },
//     "1350/3072344": {
//         leaseNumber: "1350/3072344",
        
//     }
// };
// Add mock lease production data keyed by leaseProductionId


const LeaseProductionPeriod = ({periodType, tab, data}) => {
    const [selectedWell, setSelectedWell] = useState(null);
    const [selectedCompletion, setSelectedCompletion] = useState(null);
    const actualData = data; //|| mockCompletionData;
    console.log('data in LeaseProductionPeriod', data, actualData);
    const LeaseProductionPeriodTitle = periodType === "annual" ? " Annual Production" : periodType === "monthly" ? "Monthly Production" : "Last 12 Months Production";
    const isCumulative = periodType === "last12Months" ? false : true;
    const isMonthly = periodType === "annual" ? false : true;
    

    // Add useEffect to set initial selection
    useEffect(() => {
        if (actualData.length > 0 && !selectedCompletion) {
            const firstCompletion = actualData[0];
            setSelectedCompletion(firstCompletion);
            
            // Get corresponding lease production data for first completion
            const leaseData = firstCompletion.productionPeriodData;
            console.log(leaseData);
            if (leaseData) {
                setSelectedWell(leaseData);
            }
        }
    }, []); // Empty dependency array means this runs once on mount

    const handleCompletionClick = (completion) => {
        setSelectedCompletion(completion);
        // Get corresponding lease production data
        const leaseData = completion.productionPeriodData;
        if (leaseData) {
            setSelectedWell(leaseData);
        }
    };

    return (actualData &&
        <>    <ProductionList 
                    completions={actualData}
                    selectedCompletion={selectedCompletion}
                    onCompletionClick={handleCompletionClick}
                />
            
                {selectedWell && (
                    <div className="production-detail-container">
                        <div className="left-panel">
                            <ProductionListLease 
                                leaseWellMembers={selectedWell.leaseWellMembers}
                            />
                        </div>
                        <div className="right-panel">
                            <CalciteLabel class="section-title">
                               {LeaseProductionPeriodTitle} for Lease Production ID: {selectedCompletion.leaseProductionId}
                            </CalciteLabel>
                            <ProductionListRecord 
                                selectedWell={selectedCompletion.productionPeriodData} 
                                isCumulative={isCumulative}
                                isMonthly={isMonthly}
                            />
                        </div>
                    </div>
                )}
        </>
    );
};

export default LeaseProductionPeriod;
