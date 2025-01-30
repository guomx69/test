import React from 'react';
import {
    CalciteTable,
    CalciteTableRow,
    CalciteTableCell,
    CalciteLabel
} from '@esri/calcite-components-react';

const ProductionListRecord= ({ selectedWell, isCumulative, isMonthly }) => {
    return (
        <div className="annual-production-table">
            {/* Prior Cumulative Table */}
            {isCumulative && (
            <CalciteTable>
                <CalciteTableRow slot="table-header">
                    <CalciteTableCell colSpan="4"></CalciteTableCell>
                    <CalciteTableCell className="cell-width">Oil (bbls)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Gas (mcf)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Water (bbls)</CalciteTableCell>
                    <CalciteTableCell className="separator-cell"></CalciteTableCell>
                    <CalciteTableCell className="cell-width">Injection Oil (bbls)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Injection Gas (mcf)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Injection Water (bbls)</CalciteTableCell>
                </CalciteTableRow>
                <CalciteTableRow>
                    <CalciteTableCell colSpan="4" alignment="end">Prior Cumulative:</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.priorCumulative?.oil}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.priorCumulative?.gas}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.priorCumulative?.water}</CalciteTableCell>
                    <CalciteTableCell className="separator-cell"></CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.priorCumulative?.injectionOil}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.priorCumulative?.injectionGas}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.priorCumulative?.injectionWater}</CalciteTableCell>
                    </CalciteTableRow>
                </CalciteTable>
            )}

            {/* Records Table */}
            <CalciteTable>
                <CalciteTableRow slot="table-header">
                    <CalciteTableCell className="col-id"></CalciteTableCell>
                    <CalciteTableCell className="col-source">Source</CalciteTableCell>
                    <CalciteTableCell className="col-year">
                        {isMonthly ? "Month-Year" : "Year"}
                    </CalciteTableCell>
                    <CalciteTableCell className="separator-cell"></CalciteTableCell>
                    <CalciteTableCell className="cell-width">Oil (bbls)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Gas (mcf)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Water (bbls)</CalciteTableCell>
                    <CalciteTableCell className="separator-cell"></CalciteTableCell>
                    <CalciteTableCell className="cell-width">Injection Oil (bbls)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Injection Gas (mcf)</CalciteTableCell>
                    <CalciteTableCell className="cell-width">Injection Water (bbls)</CalciteTableCell>
                </CalciteTableRow>
                {selectedWell?.records?.map((record) => (
                    <CalciteTableRow key={record.id}>
                        <CalciteTableCell>{record.id}</CalciteTableCell>
                        <CalciteTableCell>{record.source}</CalciteTableCell>
                        <CalciteTableCell>{record.year}</CalciteTableCell>
                        <CalciteTableCell className="separator-cell"></CalciteTableCell>
                        <CalciteTableCell className="cell-width">{record.oil}</CalciteTableCell>
                        <CalciteTableCell className="cell-width">{record.gas}</CalciteTableCell>
                        <CalciteTableCell className="cell-width">{record.water}</CalciteTableCell>
                        <CalciteTableCell className="separator-cell"></CalciteTableCell>
                        <CalciteTableCell className="cell-width">{record.injectionOil}</CalciteTableCell>
                        <CalciteTableCell className="cell-width">{record.injectionGas}</CalciteTableCell>
                        <CalciteTableCell className="cell-width">{record.injectionWater}</CalciteTableCell>
                    </CalciteTableRow>
                ))}
            </CalciteTable>

            {/* Totals Table */}
            <CalciteTable>
                <CalciteTableRow className="separator-row">
                    <CalciteTableCell colSpan="11"></CalciteTableCell>
                </CalciteTableRow>
                <CalciteTableRow>
                    <CalciteTableCell colSpan="4" alignment="end">Totals:</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.totals?.oil}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.totals?.gas}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.totals?.water}</CalciteTableCell>
                    <CalciteTableCell className="separator-cell"></CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.totals?.injectionOil}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.totals?.injectionGas}</CalciteTableCell>
                    <CalciteTableCell className="cell-width">{selectedWell?.totals?.injectionWater}</CalciteTableCell>
                </CalciteTableRow>
            </CalciteTable>
            <CalciteLabel class="record-count">
                Number of Production Records: {selectedWell?.records?.length || 0}
            </CalciteLabel>
        </div>
    );
};

export default ProductionListRecord; 