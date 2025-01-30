import React from 'react';

import CompletionSummary from './tabLayouts/CompletionSummary';
import CompletionSumProd from './tabLayouts/CompletionSumProd';

import Formation from './tabLayouts/Formation';

import GeneralInfo from './tabLayouts/GeneralInfo';
import GeneralInfoList from './tabLayouts/GeneralInfoList';
import GeneralInfoListX from './tabLayouts/GeneralInfoListX';


import LeaseProduction from './tabLayouts/LeaseProduction';
import LeaseProductionPeriod from './tabLayouts/LeaseProductionPeriod';
import ProductionPeriod from './tabLayouts/ProductionPeriod';
import ProductionPeriodNoLeaseNoRd from './tabLayouts/ProductionPeriodNoLeaseNoRd';

const DetailTab = ({tab, data}) => {
    const componentMap = {
        // General Info Components
        generalInfo: GeneralInfo,
        generalInfoList: GeneralInfoList,
        generalInfoListX: GeneralInfoListX,

        // Completion Components
        completionSummary: CompletionSummary,
        formation: Formation,
        completionSumProd: CompletionSumProd,

        // Lease Production Components
        leaseProduction: LeaseProduction,
        leaseProductionAnnual: props => <LeaseProductionPeriod periodType="annual" {...props} />,
        leaseProductionMonthly: props => <LeaseProductionPeriod periodType="monthly" {...props} />,
        leaseProductionLast12Months: props => <LeaseProductionPeriod periodType="last12Months" {...props} />,

        // Production Components
        productionAnnual: props => <ProductionPeriod periodType="annual" {...props} />,
        productionMonthly: props => <ProductionPeriod periodType="monthly" {...props} />,
        productionLast12Months: props => <ProductionPeriod periodType="last12Months" {...props} />,

        // Production No Lease No Rd Components
        productionPeriodNoLeaseNoRdAnnual: props => <ProductionPeriodNoLeaseNoRd periodType="annual" {...props} />,
        productionPeriodNoLeaseNoRdMonthly: props => <ProductionPeriodNoLeaseNoRd periodType="monthly" {...props} />,
        productionPeriodNoLeaseNoRdLast12Months: props => <ProductionPeriodNoLeaseNoRd periodType="last12Months" {...props} />,
    };

    const Component = componentMap[tab.type];
    return Component ? <Component tab={tab} data={data} /> : null;
};

export default DetailTab;