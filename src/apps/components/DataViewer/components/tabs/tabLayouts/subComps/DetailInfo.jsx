import React from 'react';
import {
    CalciteTable,
    CalciteTableRow,
    CalciteTableCell
} from '@esri/calcite-components-react';
import { chunkFields } from '../../../../../../../libs/utils/helper';

import './niogemsDetailv1.css';

const DetailInfo = ({ selectedTab, colsEachRow }) => { 
    console.log("DetailInfo selectedTab", selectedTab);

    colsEachRow = colsEachRow || 2;
    return (
        <div>
            {selectedTab && <CalciteTable className="niogems-detailv1">
                {chunkFields((selectedTab), colsEachRow).map((row, rowIndex) => (
                    <CalciteTableRow 
                        key={`detail-row-${rowIndex}`}
                        className="details-row" 
                        style={{"--cols-count": colsEachRow}}
                    >
                        {row.map((field, fieldIndex) => (
                            <React.Fragment key={`field-${rowIndex}-${fieldIndex}`}>
                                <CalciteTableCell className="label">{field.label}:</CalciteTableCell>
                                <CalciteTableCell className="value">{field.value}</CalciteTableCell>
                            </React.Fragment>
                        ))}
                    </CalciteTableRow>
                ))}
            </CalciteTable>}
        </div>
    );
};

export default DetailInfo; 