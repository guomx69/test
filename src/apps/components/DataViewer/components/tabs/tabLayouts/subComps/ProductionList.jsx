import React from 'react';
import {
    CalciteTable,
    CalciteTableRow,
    CalciteTableCell
} from '@esri/calcite-components-react';
import { fieldMapLabelsConfig } from '../../../../constants/NiogemsFieldMapLabel';

const ProductionList = ({ 
    completions, 
    selectedCompletion, 
    onCompletionClick 
}) => {
    console.log('completions in ProductionList', completions);
    if (completions=== undefined) {
        return null;
    }
    const keys = Object.keys(completions?.[0]) || ["completion","current","leaseName","operatorName","producingZone","productionDetails","sequence","source","status","wellNumber"];
    //console.log("keys", keys);
    
    return (
              <CalciteTable>
                <CalciteTableRow slot="table-header">
                    <CalciteTableCell></CalciteTableCell>
                    {keys.map((key) => {
                        const label = fieldMapLabelsConfig.find(config => config.key === key)?.label;
                        return (
                            <CalciteTableCell key={`cell-${key}`}>{label}</CalciteTableCell>
                        );
                    })}
                </CalciteTableRow>

                {completions.map((completion) => (
                    <CalciteTableRow 
                        key={completion.id}
                        onClick={() => onCompletionClick(completion)}
                        className={selectedCompletion?.id === completion.id ? 'selected-row' : ''}
                    >
                        <CalciteTableCell>
                            <input 
                                type="checkbox" 
                                checked={completion.checked}
                                onChange={(e) => e.stopPropagation()}
                            />
                        </CalciteTableCell>
                        {keys.map((key) => {
                        const isExist=fieldMapLabelsConfig.find(config => config.key === key);
                        if (isExist) { //ignore the key that is not in the fieldMapLabelsConfig
                            return (
                                <CalciteTableCell key={`${key}-${completion[key]}`}>
                                {completion[key]}
                                </CalciteTableCell>
                            )
                        }
                        })}
                    </CalciteTableRow>
                ))}
            </CalciteTable>
        
    );
};

export default ProductionList; 