import React from 'react';
import {
    CalciteTable,
    CalciteTableRow,
    CalciteTableCell,
    CalciteLabel
} from '@esri/calcite-components-react';
import { fieldMapLabelsConfig } from '../../../../constants/NiogemsFieldMapLabel';

const RecordList = ({ 
    completions, 
    selectedCompletion, 
    onCompletionClick,
    onCheckboxClick,
    checkedRows 
}) => {
    const handleCheckboxClick = (event, wellNumber) => {
        event.stopPropagation();
        onCheckboxClick(wellNumber);
    };

    const keys = Object.keys(completions?.[0]) || ["completion","current","leaseName","operatorName","producingZone","productionDetails","sequence","source","status","wellNumber"];
    //console.log("keys", keys);
    //console.log("completions", completions);

    return (
        <div className="completion-viewer">
            <CalciteTable>
                <CalciteTableRow slot="table-header">
                    <CalciteTableCell></CalciteTableCell>
                    <CalciteTableCell key="cell-checkbox"></CalciteTableCell>
                    {keys.map((key) => {
                        const label = fieldMapLabelsConfig.find(config => config.key === key)?.label;
                        return (
                            <CalciteTableCell key={`cell-${key}`}>{label}</CalciteTableCell>
                        );
                    })}
                </CalciteTableRow>

                {completions?.map((completion, index) => {
                    const rowIndex = String(index + 1).padStart(5, '0');
                    const cells=keys.map((key) => {
                        const isExist=fieldMapLabelsConfig.find(config => config.key === key);
                        if (isExist) { //ignore the key that is not in the fieldMapLabelsConfig
                            return (
                                <CalciteTableCell key={`${key}-${completion[key]}`}>
                                {completion[key]}
                                </CalciteTableCell>
                            )
                        }
                        });
                     //console.log("cells", cells);
                    return (
                        <CalciteTableRow 
                            key={`completion-${index}`}
                            onClick={() => onCompletionClick(completion)}
                            className={`${index % 2 === 0 ? 'row-even' : 'row-odd'} ${selectedCompletion === completion ? 'selected-row' : ''}`}
                        >
                            <CalciteTableCell key={`rowIndex-${rowIndex}`}>{rowIndex}</CalciteTableCell>
                            <CalciteTableCell key={`cell-checkbox-${rowIndex}`} >
                                <input 
                                    type="checkbox"
                                    checked={checkedRows?.has(completion.wellNumber)}
                                    onChange={(event) => handleCheckboxClick(event, completion.wellNumber)}
                                    onClick={(event) => event.stopPropagation()}
                                />
                            </CalciteTableCell>
                             {cells}
                        </CalciteTableRow>
                    );
                })}
            </CalciteTable>
        </div>
    );
};

export default RecordList; 