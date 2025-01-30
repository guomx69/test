import React, { useState, useEffect } from 'react';
import {
    CalciteLabel
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-label';

import DetailInfo from './subComps/DetailInfo';
import RecordList from './subComps/RecordList';
import { createTabLabeledContent } from '../../../constants/NiogemsFieldMapLabel';

import './CompletionSumProd.css';

const colsEachRowCumul = 3;
const colsEachRowFirstRates = 2;
const colsEachRowLastRates = 2;

// const mockCompletions = [
//     {
//         completion: "0001",
//         sequence: "2",
//         current: "Y",
//         source: "IHS",
//         status: "ABDOIL",
//         leaseName: "079744",
//         wellNumber: "2",
//         producingZone: "",
//         operatorName: "CARTER OIL CO",
//         productionDetails: {
//             cumulative: {
//                 oil: "0",
//                 gas: "0",
//                 water: "0",
//                 gasOilRatio: "0",
//                 totalDaysOnProduction: "0",
//                 firstProductionDate: "",
//                 finalWellType: "OIL",
//                 injectionOil: "0",
//                 injectionGas: "0",
//                 injectionWater: "0",
//                 totalDaysOnInjection: "0",
//                 lastProductionDate: ""
//             },
//             firstRates: {
//                 oilRate: "0",
//                 gasRate: "0",
//                 waterRate: "0",
//                 gasOilRatio: "0",
//                 daysOnProduction: "0",
//                 injectionOilRate: "0",
//                 injectionGasRate: "0",
//                 injectionWaterRate: "0",
//                 daysOnInjection: ""
//             },
//             lastRates: {
//                 oilRate: "0",
//                 gasRate: "0",
//                 waterRate: "0",
//                 gasOilRatio: "0",
//                 daysOnProduction: "0",
//                 injectionOilRate: "0",
//                 injectionGasRate: "0",
//                 injectionWaterRate: "0",
//                 daysOnInjection: "00"
//             }
//         }
//     },
//     {
//         completion: "0002",
//         sequence: "1",
//         current: "N",
//         source: "IHS",
//         status: "ABDOIL",
//         leaseName: "079744",
//         wellNumber: "2",
//         producingZone: "",
//         operatorName: "CARTER OIL CO",
//         productionDetails: {
//             cumulative: {
//                 oil: "0",
//                 gas: "0",
//                 water: "0",
//                 gasOilRatio: "0",
//                 totalDaysOnProduction: "0",
//                 firstProductionDate: "",
//                 finalWellType: "OIL",
//                 injectionOil: "0",
//                 injectionGas: "0",
//                 injectionWater: "0",
//                 totalDaysOnInjection: "0",
//                 lastProductionDate: "",
//             },
//             firstRates: {
//                 oilRate: "0",
//                 gasRate: "0",
//                 waterRate: "0",
//                 gasOilRatio: "0",
//                 daysOnProduction: "0",
//                 injectionOilRate: "0",
//                 injectionGasRate: "0",
//                 injectionWaterRate: "0",
//                 daysOnInjection: "00"
//             },
//             lastRates: {
//                 oilRate: "0",
//                 gasRate: "0",
//                 waterRate: "0",
//                 gasOilRatio: "0",
//                 daysOnProduction: "0",
//                 injectionOilRate: "0",
//                 injectionGasRate: "0",
//                 injectionWaterRate: "0",
//                 daysOnInjection: "00"
              
//             }
//         }
//     }
// ];


const CompletionSumProd = ({tab, data}) => {
    const [selectedCompletion, setSelectedCompletion] = useState(null);
    const [checkedRows, setCheckedRows] = useState(new Set());
    const actualData = data; //|| mockCompletions; //data || mockCompletions;
    const colsEachRow = tab?.colsEachRow || colsEachRowCumul;

    useEffect(() => {
        if (actualData.length > 0 && !selectedCompletion) {
            setSelectedCompletion(actualData[0]);
        }
    }, []);

    const handleCompletionClick = (completion) => {
        setSelectedCompletion(completion);
    };

    const handleCheckboxClick = (wellNumber) => {
        setCheckedRows(prevChecked => {
            const newSet = new Set(prevChecked);
            newSet.has(wellNumber) ? newSet.delete(wellNumber) : newSet.add(wellNumber);
            return newSet;
        });
    };

    return (
        <>
            <RecordList 
                completions={actualData}
                selectedCompletion={selectedCompletion}
                onCompletionClick={handleCompletionClick}
                onCheckboxClick={handleCheckboxClick}
                checkedRows={checkedRows}
            />

            {selectedCompletion && (
               <div className="production-detail">
                    <div className="cumulative-section">
                        <CalciteLabel class="section-title">Cumulative Production</CalciteLabel>
                        <DetailInfo 
                            selectedTab={createTabLabeledContent(selectedCompletion.productionDetails.cumulative)} 
                            colsEachRow={colsEachRow}
                        />
                    </div>

                    <div className="production-detail-container">
                        <div className="left-panel">
                            <CalciteLabel class="section-title">First Production Rates</CalciteLabel>
                            <DetailInfo 
                                selectedTab={createTabLabeledContent(selectedCompletion.productionDetails.firstRates)}
                                colsEachRow={colsEachRowFirstRates}
                            />
                        </div>

                        <div className="right-panel">
                            <CalciteLabel class="section-title">Last Production Rates</CalciteLabel>
                            <DetailInfo 
                                selectedTab={createTabLabeledContent(selectedCompletion.productionDetails.lastRates)}
                                colsEachRow={colsEachRowLastRates}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CompletionSumProd;