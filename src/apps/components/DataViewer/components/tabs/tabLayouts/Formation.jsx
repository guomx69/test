import React from 'react';
import {
    CalcitePanel,
    CalciteTable,
    CalciteTableHeader,
    CalciteTableRow,
    CalciteTableCell
} from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-panel';
import '@esri/calcite-components/dist/components/calcite-table';
import '@esri/calcite-components/dist/components/calcite-table-header';
import '@esri/calcite-components/dist/components/calcite-table-row';
import '@esri/calcite-components/dist/components/calcite-table-cell';
import { fieldMapLabelsConfig } from '../../../constants/NiogemsFieldMapLabel';
import './Formation.css';



const Formation = ({tab, data}) => {
    const actualData = data;
    const keys = Object.keys(actualData?.[0] || {});
    //console.log("keys",keys);
    return (
       
            <CalciteTable>
                <CalciteTableRow key="0" slot="table-header">
                    <CalciteTableHeader></CalciteTableHeader>
                    {keys.map((key) => (
                        <CalciteTableCell key={key}>{fieldMapLabelsConfig.find(item => item.key === key)?.label||key}</CalciteTableCell>
                    ))}
                   
                </CalciteTableRow>
               
                {actualData.map((formation, index) => {
                    const rowIndex = String(index + 1).padStart(5, '0');
                    return (
                        <CalciteTableRow 
                            key={`formation-${rowIndex}`} 
                            className={index % 2 === 0 ? 'row-even' : 'row-odd'}
                        >
                            <CalciteTableCell key={`rowIndex-${rowIndex}`}>{rowIndex}</CalciteTableCell>
                            {keys.map((key) => (
                                <CalciteTableCell key={`${key}-${formation[key]}`}>{formation[key]}</CalciteTableCell>
                            ))}
                        </CalciteTableRow>
                    );
                })}
            </CalciteTable>
      
    );
};

export default Formation;

// const mockFormations = [
//     {
//         formation: "BDZSRS",
//         name: "SUNBURST",
//         topDepth: "3025.00",
//         bottomDepth: "",
//         source: "SP Log"
//     },
//     {
//         formation: "BDZBNK",
//         name: "CUTBANK/CUT BANK",
//         topDepth: "3071.00",
//         bottomDepth: "",
//         source: "SP Log"
//     }
// ];
