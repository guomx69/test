import React, { useState } from 'react';
import CommonListPanel from './list/CommonListPanel';
import CommonList from './list/CommonList';
import TractDetails from './TractDetails';

const TractDataViewer = () => {
  const [selectedTract, setSelectedTract] = useState(null);
  const [checkedRecords, setCheckedRecords] = useState(new Set());
  const [sortCriteria, setSortCriteria] = useState('Tract Number');
  const [selectionCriteria, setSelectionCriteria] = useState('Active Tracts');

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
          type="TRACT"
          updateCheckedRows={updateCheckedRows}
          onRowSelectionChange={setSelectedTract}
        />
        {selectedTract && <TractDetails selectedId={selectedTract} />} */}
        <h1>Tract Data Viewer</h1>
    </div>
  );
};

export default TractDataViewer;
    