import React, { useState, useEffect } from 'react';
import {
    CalciteLabel
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-label';
import DetailInfo from './subComps/DetailInfo';
import ProductionList from './subComps/ProductionList';
import ProductionListLease from './subComps/ProductionListLease';
import './LeaseProduction.css';
import './subComps/niogemsDetailv1.css';
import { createTabLabeledContent } from '../../../constants/NiogemsFieldMapLabel';



const LeaseProduction = ({tab, data}) => { 
    const [selectedWell, setSelectedWell] = useState(null);
    const [selectedCompletion, setSelectedCompletion] = useState(null);
    const actualData = data; // || mockCompletionData;
    const {colsEachRowCumulative,colsEachRowFirstRates,colsEachRowLastRates} = tab?.colsEachRow || {colsEachRowCumulative: 3,colsEachRowFirstRates: 2,colsEachRowLastRates: 2};
    //console.log('data in LeaseProduction', data, actualData);

    useEffect(() => {
        if (actualData.length > 0 && !selectedCompletion) {
            const firstCompletion = actualData[0];
            setSelectedCompletion(firstCompletion);
            const leaseData = firstCompletion.productionData;
            if (leaseData) {
                setSelectedWell({
                    leaseProduction: leaseData,
                    leaseWellMembers: leaseData.leaseWellMembers
                });
            }
        }
    }, []);

    const handleCompletionClick = (completion) => {
        setSelectedCompletion(completion);
        const leaseData = completion.productionData;
        if (leaseData) {
            setSelectedWell({
                leaseProduction: leaseData,
                leaseWellMembers: leaseData.leaseWellMembers
            });
        }
    };

    return (actualData &&
        <>  
            <ProductionList 
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
                            Lease Production ID: {selectedCompletion.leaseProductionId}
                        </CalciteLabel>

                        <div className="cumulative-section">
                            <CalciteLabel class="section-title">Lease Cumulative Production</CalciteLabel>
                            <DetailInfo selectedTab={createTabLabeledContent(selectedWell.leaseProduction.cumulative)} colsEachRow={colsEachRowCumulative} />
                        </div>

                        <div className="rates-section">
                            <div className="left-panel">
                                <CalciteLabel class="section-title">Lease First Production Rates</CalciteLabel>
                                <DetailInfo selectedTab={createTabLabeledContent(selectedWell.leaseProduction.firstRates)} colsEachRow={colsEachRowFirstRates} />
                            </div>

                            <div className="right-panel">
                                <CalciteLabel class="section-title">Lease Last Production Rates</CalciteLabel>
                                <DetailInfo selectedTab={createTabLabeledContent(selectedWell.leaseProduction.lastRates)} colsEachRow={colsEachRowLastRates} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LeaseProduction;


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
//             productionData:{
//                 leaseWellMembers: [
//                     { apiNumber: "25015550000000", status: "ABD-OIL" },
//                     { apiNumber: "25015550250000", status: "ABD-OIL" },
//                     { apiNumber: "25015550500000", status: "ABD-OIL" }
//                 ],
//                 cumulative: {
//                     oil: "20600",
//                     gas: "0",
//                     water: "0",
//                     gasOilRatio: "0",
//                     finalWellType: "OIL",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0",
//                     firstProductionDate: "06/31/1973",
//                     lastProductionDate: "06/31/2023"
//                 },
//                 firstRates: {
//                     oil: "2.7540856",
//                     gas: "0",
//                     water: "0",
//                     gasOilRatio: "0",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0"
//                 },
//                 lastRates: {
//                     oil: "4.4083657",
//                     gas: "0",
//                     water: "0",
//                     gasOilRatio: "0",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0"
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
//             productionData:{
//                 leaseWellMembers: [
//                     { apiNumber: "25015550000001", status: "ABD-OIL" },
//                     { apiNumber: "25015550250001", status: "ABD-OIL" }
//                 ],
//                 cumulative: {
//                     oil: "15400",
//                     gas: "0",
//                     water: "0",
//                     gasOilRatio: "0",
//                     finalWellType: "OIL",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0",
//                     firstProductionDate: "08/31/1971",
//                     lastProductionDate: "08/31/2023"
//                 },
//                 firstRates: {
//                     oil: "2.75409",
//                     gas: "0",
//                     water: "0",
//                     gasOilRatio: "0",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0"
//                 },
//                 lastRates: {
//                     oil: "3.40984",
//                     gas: "0",
//                     water: "0",
//                     gasOilRatio: "0",
//                     injectionOil: "0",
//                     injectionGas: "0",
//                     injectionWater: "0"
//                 }
//             }
//         }
//     ],
// };
