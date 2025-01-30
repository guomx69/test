import React from 'react';
import {
    CalciteLabel
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-label';
import DetailInfo from './subComps/DetailInfo';
import { createTabLabeledContent } from '../../../constants/NiogemsFieldMapLabel';

// const mockCompletions = [
//     {
//         completion: "1234",
//         currentStatus: "LOC",
//         completionDate: "06/31/2023",
//         upperPerforation: "1000",
//         lowerPerforation: "2000",
//         dataSource: "IHS",
//         firstProductionDate: "06/31/2023",
//         lastProductionDate: "06/31/2023",
//         sequence: "1",
//         leaseProductionID: "1234",
//         producingZone: "OIL",
//         currentCompletion: "Y",
//     },
//     {
//         completion: "1234",
//         currentStatus: "LOC",
//         completionDate: "06/31/2023",
//         upperPerforation: "1000",
//         lowerPerforation: "2000",
//         dataSource: "IHS",
//         firstProductionDate: "06/31/2023",
//         lastProductionDate: "06/31/2023",
//         sequence: "1",
//         leaseProductionID: "1234",
//         producingZone: "OIL",
//         currentCompletion: "Y",
//     }
// ]
const CompletionSummary = ({tab, data}) => { 
   // console.log("CompletionSummary data",data);
    const colsEachRow = tab?.colsEachRow || 2;
    const actualData = data; //|| mockCompletions; //data?.fields || mockCompletions;
    //console.log("CompletionSummary actualData",actualData);
    return (
        <div className="completion-content">
            {actualData.map((rowData, index) => { //console.log("rowData",rowData);
                const tabData=createTabLabeledContent(rowData);
                // console.log("tabData",tabData);
                return (
                    <div key={`completion-${index}`}>
                        <CalciteLabel class="record-count">
                            Record {index + 1} of {actualData.length}
                    </CalciteLabel>
                    <DetailInfo selectedTab={tabData} colsEachRow={colsEachRow} />
                </div>
            )})}
        </div>
    );
};

export default CompletionSummary;
