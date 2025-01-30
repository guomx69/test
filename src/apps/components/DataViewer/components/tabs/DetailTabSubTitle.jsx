import React from 'react';
import { CalciteLabel } from '@esri/calcite-components-react';
import '@esri/calcite-components/dist/components/calcite-label';
import './DetailTabSubTitle.css';

const DetailTabSubTitle = ({ type, data }) => {
    if (!type) return null;

    const renderField = (label, value) => (
        <span className="field">
            <CalciteLabel class="label">{label}:</CalciteLabel>
            <CalciteLabel class="value">{value}</CalciteLabel>
        </span>
    );

    const renderSeparator = () => <CalciteLabel class="separator">,</CalciteLabel>;

    switch (type) {
        case 'WELL_COMPLETION_PRODUCTION':
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Well Production Data for Completion - </CalciteLabel>
                    {renderField('API', data?.api)}
                    {renderSeparator()}
                    {renderField('Sequence', data?.sequence)}
                    {renderSeparator()}
                    {renderField('Lease Name', data?.leaseName)}
                    {renderSeparator()}
                    {renderField('Well Number', data?.wellNumber)}
                </div>
            );

        case 'WELL_COMPLETION_PRODUCTION_WITH_COMPLETION':
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Well Production Data for Completion - </CalciteLabel>
                    {renderField('API', data?.api)}
                    {renderSeparator()}
                    {renderField('Completion', data?.completion)}
                    {renderSeparator()}
                    {renderField('Sequence', data?.sequence)}
                    {renderSeparator()}
                    {renderField('Lease Name', data?.leaseName)}
                    {renderSeparator()}
                    {renderField('Well Number', data?.wellNumber)}
                </div>
            );

        case 'SUMMED_CHECKED_ITEMS':
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Summed Well Production Data for All Checked Items</CalciteLabel>
                </div>
            );

        case 'SUMMED_WELL_SITE':
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Summed Well Production Data for Well Site - </CalciteLabel>
                    {renderField('API', data?.api)}
                </div>
            );

        case 'WELL_SITE':
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Well Site Data for </CalciteLabel>
                    {renderField('API', data?.api)}
                    {renderSeparator()}
                    {renderField('Lease Name', data?.leaseName)}
                    {renderSeparator()}
                    {renderField('Well Number', data?.wellNumber)}
                </div>
            );

        case 'WELL_COMPLETION':
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Well Completion Data for </CalciteLabel>
                    {renderField('API', data?.api)}
                </div>
            );

        case 'WELL_COMPLETION_PRODUCTION_DATA':
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Well Completion Production Data for </CalciteLabel>
                    {renderField('API', data?.api)}
                </div>
            );

        default:
            return (
                <div className="detail-tab-subtitle">
                    <CalciteLabel>Details</CalciteLabel>
                </div>
            );
    }
};

export default DetailTabSubTitle;