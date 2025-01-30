import React from 'react';
import DetailInfo from './subComps/DetailInfo';

const GeneralInfo = ({ tab, data }) => {
    //console.log("data",data);
    // Transform data into the format expected by DetailInfo
    const tabData = data;
    const colsEachRow = tab?.colsEachRow || 2;
    //console.log("tabData",tabData);

    return (
        <div className="general-info-container">
            <DetailInfo selectedTab={tabData} colsEachRow={colsEachRow} />
        </div>
    );
};

export default GeneralInfo;