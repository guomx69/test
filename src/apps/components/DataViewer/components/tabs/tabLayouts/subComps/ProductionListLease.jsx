import React from 'react';
import {
    CalciteTable,
    CalciteTableRow,
    CalciteTableCell,
    CalciteLabel,
    CalciteActionGroup,
    CalciteAction,
    CalciteActionBar
} from '@esri/calcite-components-react';

const ProductionListLease = ({ leaseWellMembers }) => {
    return (
        <>
            <CalciteLabel class="section-title">Lease Well Members</CalciteLabel>
            <CalciteTable>
                <CalciteTableRow slot="table-header">
                    <CalciteTableCell>API Number</CalciteTableCell>
                    <CalciteTableCell>Status</CalciteTableCell>
                </CalciteTableRow>
                {leaseWellMembers?.map((well, index) => (
                    <CalciteTableRow key={`well-${index}`}>
                        <CalciteTableCell>{well.apiNumber}</CalciteTableCell>
                        <CalciteTableCell>{well.status}</CalciteTableCell>
                    </CalciteTableRow>
                ))}
            </CalciteTable>
            <CalciteActionBar layout="horizontal" expanded="false">
                <CalciteActionGroup label="Actions">
                    <CalciteAction
                        scale="s"
                        icon="cursor"
                        text="Select Current Item"
                    />
                    <CalciteAction
                        scale="s"
                        icon="flash"
                        text="Flash Current Item"
                    />
                    <CalciteAction
                        scale="s"
                        icon="magnifying-glass-plus"
                        text="Zoom to Current Item"
                    />
                    <CalciteAction
                        scale="s"
                        icon="list-check-all"
                        text="Sell All"
                    />
                </CalciteActionGroup>
            </CalciteActionBar>
        </>
    );
};

export default ProductionListLease; 