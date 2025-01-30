import React, { useState, useEffect } from 'react';

import RecordList from './subComps/RecordList';
import DetailInfo from './subComps/DetailInfo';

import { createTabLabeledContent } from '../../../constants/NiogemsFieldMapLabel';

const mockCompletions = [
    {
        completion: "0001",
        sequence: "2",
        current: "Y",
        source: "IHS",
        status: "ABDOIL",
        leaseName: "079744",
        wellNumber: "2",
        producingZone: "",
        operatorName: "CARTER OIL CO",
        details: {
            leaseName: '079744',
            wellNumber: '2',
            apiNumber: '25035054580001',
            operatorName: 'CARTER OIL CO',
            spot: 'SESW',
            section: '2',
            township: '32N',
            range: '5W',
            meridian: 'MT',
            fieldName: 'CUT BANK',
            spudDate: '10/23/1949',
            completionDate: '10/23/1949',
            status: 'ABDOIL',
            finalLaheeClass: 'DO',
            producingZone: '',
            upperPerforation: '0',
            lowerPerforation: '0'
        }
    },
    {
        completion: "0002",
        sequence: "1",
        current: "N",
        source: "IHS",
        status: "ABDOIL",
        leaseName: "079744",
        wellNumber: "2",
        producingZone: "",
        operatorName: "CARTER OIL CO",
        details: {
            leaseName: '079744',    
            wellNumber: '2',
            apiNumber: '25035054580001',
            operatorName: 'CARTER OIL CO',
            spot: 'SESW',
            section: '4',
            township: '32N',
            range: '5W',
            meridian: 'MT',
            fieldName: 'CUT BANK',
            spudDate: '10/23/1964',
            completionDate: '10/23/1964',
            status: 'ABDOIL',
            finalLaheeClass: 'DO',
            producingZone: '',
            upperPerforation: '0',
            lowerPerforation: '0'
        }
    }
];

const GeneralInfoList = ({tab, data}) => {
    const [selectedCompletion, setSelectedCompletion] = useState(null);
    const [checkedRows, setCheckedRows] = useState(new Set());
    const actualData = data; // mockCompletions; //data.fields || mockCompletions;
    const colsEachRow = tab?.colsEachRow || 2;

    console.log("GeneralInfoList actualData", actualData);
    // Add useEffect to set initial selection
    useEffect(() => {
        if (actualData.length > 0 && !selectedCompletion) {
            setSelectedCompletion(createTabLabeledContent(actualData[0].details));
        }
    }, [actualData]); // Dependency on actualData

    const handleCompletionClick = (completion) => {
        setSelectedCompletion(createTabLabeledContent(completion.details));
    };

    const handleCheckboxClick = (wellNumber) => {
        const newCheckedRows = new Set(checkedRows);
        if (newCheckedRows.has(wellNumber)) {
            newCheckedRows.delete(wellNumber);
        } else {
            newCheckedRows.add(wellNumber);
        }
        setCheckedRows(newCheckedRows);
    };

    return (
       <>
            <RecordList 
                completions={actualData}
                selectedCompletion={selectedCompletion}
                onCompletionClick={handleCompletionClick}
                onCheckboxClick={handleCheckboxClick}
                checkedRows={checkedRows}
            />

            {selectedCompletion && (
                <DetailInfo selectedTab={selectedCompletion} colsEachRow={colsEachRow} />
            )}
        </>
    );
};

export default GeneralInfoList;
