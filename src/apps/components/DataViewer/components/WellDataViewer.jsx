import React, { useState } from 'react';
import { CalciteShell, CalciteShellPanel } from '@esri/calcite-components-react';
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-shell-panel";

import CommonList from './list/CommonList';
import CommonListPanel from './list/CommonListPanel';
import { LIST_CONFIG } from '../constants/listConfig';

import CommonListFt from './list/CommonList_Ft';
import { featureLayerConfigs, featureTableConfigs } from '../constants/listConfig_Esri';

import CommonListNiogems from './list/CommonList_Niogems';
import { externalApiConfig,esriFtLyerConfig } from '../constants/listConfig_Niogems';


import WellDataViewerDetails from './WellDataViewerDetails';

import './WellDataViewer.css';

const WellDataViewer = () => { //console.log("WellDataViewer is called");
  const [selectedApi, setSelectedApi] = useState(null);
  const [checkedRecords, setCheckedRecords] = useState(new Set());

  const [sortCriteria, setSortCriteria] = useState('Formation at Td');
  const [selectionCriteria, setSelectionCriteria] = useState('2008 to 2010 Completion Date');

  const [custParams, setCustParams] = useState({});
/**


/**
 * handler for the first top panel
 */

  const handleApplySort = () => {
    console.log('Applying sort:', sortCriteria);
    setCustParams({...custParams, sortCriteria: sortCriteria});
    // Implementation
  };

  const handleApplySelection = () => {
    console.log('Applying selection:', selectionCriteria);
    setCustParams({...custParams, selectionCriteria: selectionCriteria});
    // Implementation
  };


 /**
  * handler for the second top panel first group
   */
  const handleIsPigination = (evt) => {
    console.log('second top panel Is Pagination',evt.target.checked);
    //setCustParams({...custParams, isPigination: !custParams.isPigination});
  };
  const handleCheckAll = () => {
    console.log('second top panel Check All');
    setCustParams({...custParams, checkOption:"checkAll"});
  };
  const handleUncheckAll = () => {
    console.log('second top panel Uncheck All');
    setCustParams({...custParams, checkOption:"uncheckAll"});
  };
  const handleToggleReverseChecked = () => {
    console.log('second top panel Toggle Reverse Checked');
    setCustParams({...custParams, checkOption:"reverseChecked"});
  };
  const handleMoveCheckedToTop = () => {
    console.log('second top panel Move Checked to Top');
    setCustParams({...custParams, moveCheckedToTop: true});
  };


  /**
   * handler for the second top panel second group
   */
  const handleCustomSort = () => {
    console.log('second top panel Custom Sort');
    setCustParams({...custParams, effectiveSize: 13,pageSize: 13,size: 13});
  };

 const handleSelectCurrent = () => {
    console.log('second top panel Select Current');
  };
  const handleFlashCurrent = () => {
    console.log('second top panel Flash Current');
  }
  const handleZoomToCurrent = () => {
    console.log('second top panel Zoom to Current');
  }; 


  /* handler for the common list
  */
   const onRowSelectionChange = (api) => {
     console.log("onRowSelectionChange", api);
     setSelectedApi(api);
   };
 
   const updateCheckedRows = (newCheckedRows) => {
     console.log("updateCheckedRows", newCheckedRows);
     setCheckedRecords(new Set(newCheckedRows));
   };

    

  return (
    <CalciteShell >
      <CalciteShellPanel layout="horizontal" >
        <CommonListPanel 
          sortCriteria={sortCriteria}
          onSortChange={setSortCriteria}

          selectionCriteria={selectionCriteria}
          onSelectionChange={setSelectionCriteria}

          onApplySort={handleApplySort}
          onApplySelection={handleApplySelection}
          

          onIsPigination={handleIsPigination}
          onCheckAll={handleCheckAll}
          onUncheckAll={handleUncheckAll}
          onToggleReverseChecked={handleToggleReverseChecked}
          
          onCustomSort={handleCustomSort}
          onMoveCheckedToTop={handleMoveCheckedToTop}
          onSelectCurrent={handleSelectCurrent}
          onFlashCurrent={handleFlashCurrent}
          onZoomToCurrent={handleZoomToCurrent}
        />
      </CalciteShellPanel>

      <CalciteShellPanel layout="horizontal" >
          <CommonList
            updateCheckedRows={updateCheckedRows}
            onRowSelectionChange={onRowSelectionChange}
            custParams={custParams}

            config={LIST_CONFIG.WELL}
          />
         
        
          {/* <CommonListFt
            updateCheckedRows={updateCheckedRows}
            onRowSelectionChange={onRowSelectionChange}
            custParams={custParams}

            featureLayerConfig={featureLayerConfigs.WELL}
            featureTableConfig={featureTableConfigs.WELL}
          /> */}
          {/* <CommonListNiogems 
            updateCheckedRows={updateCheckedRows}
            onRowSelectionChange={onRowSelectionChange}
            custParams={custParams}

            config={esriFtLyerConfig} 
          /> */}

      </CalciteShellPanel>
      
      <CalciteShellPanel layout="horizontal">
        {selectedApi && <WellDataViewerDetails selectedApi={selectedApi} />}
      </CalciteShellPanel>
    </CalciteShell>
  );
};

export default WellDataViewer; 