import React, { useState } from 'react';
// import CommonListPanel from './list/CommonListPanel';
// import CommonList from './list/ CommonList';
// import AgreementDetails from './AgreementDetails';

const AgreementDataViewer = () => {
  const [selectedAgreement, setSelectedAgreement] = useState(null);
  const [checkedRecords, setCheckedRecords] = useState(new Set());
  const [sortCriteria, setSortCriteria] = useState('Agreement Number');
  const [selectionCriteria, setSelectionCriteria] = useState('Active Agreements');

  const updateCheckedRows = (newCheckedRows) => {
    setCheckedRecords(new Set(newCheckedRows));
  };

  const handleApplySort = () => {
    console.log('Applying sort:', sortCriteria);
  };

  const handleApplySelection = () => {
    console.log('Applying selection:', selectionCriteria);
  };

  return (
    <div className="data-viewer-container">
      {/* <CommonListPanel 
        sortCriteria={sortCriteria}
        selectionCriteria={selectionCriteria}
        onSortChange={setSortCriteria}
        onSelectionChange={setSelectionCriteria}
        onApplySort={handleApplySort}
        onApplySelection={handleApplySelection}
      />
      <CommonList 
        type="AGREEMENT"
        updateCheckedRows={updateCheckedRows}
        onRowSelectionChange={setSelectedAgreement}
      />
      {selectedAgreement && <AgreementDetails selectedId={selectedAgreement} />} */}
      <h1>Agreement Data Viewer</h1>
    </div>
  );
};

export default AgreementDataViewer;
