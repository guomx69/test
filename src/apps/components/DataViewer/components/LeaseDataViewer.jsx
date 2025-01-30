import React, { useState } from 'react';
import { CalciteShell } from '@esri/calcite-components-react';
//import CommonListPanel from './list/CommonListPanel';
import LeaseList from './LeaseList';
import LeaseDetails from './LeaseDetails';

const LeaseDataViewer = () => {
  const [selectedLease, setSelectedLease] = useState(null);
  const [checkedRecords, setCheckedRecords] = useState(new Set());
  const [sortCriteria, setSortCriteria] = useState('Lease Number');
  const [selectionCriteria, setSelectionCriteria] = useState('Active Leases');
  const [productionSource, setProductionSource] = useState('reported');

  // ... similar handlers as WellDataViewer but for leases ...

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
      <LeaseList 
        selectedLease={selectedLease}
        updateCheckedRows={updateCheckedRows}
        onRowSelectionChange={setSelectedLease}
        checkedRecords={checkedRecords}
        productionSource={productionSource}
        onProductionSourceChange={setProductionSource}
        // ... other props ...
      />
      {selectedLease && <LeaseDetails selectedLease={selectedLease} />} */}
      <h1>Lease Data Viewer</h1>
    </div>
  );
};

export default LeaseDataViewer;