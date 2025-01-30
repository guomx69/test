import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ExpressServerApis } from '../../../../../libs/utils/apiCalls';

import { 
  CalciteTable,
  CalcitePagination,
  CalciteTableRow,
  CalciteTableCell,
  CalciteTableHeader
} from '@esri/calcite-components-react';

import "@esri/calcite-components/dist/components/calcite-table";
import "@esri/calcite-components/dist/components/calcite-table-row";
import "@esri/calcite-components/dist/components/calcite-table-cell";
  import "@esri/calcite-components/dist/components/calcite-table-header";
  import "@esri/calcite-components/dist/components/calcite-pagination";
import './CommonList.css';


const CommonList = ({ updateCheckedRows, onRowSelectionChange, config,custParams }) => {
 // console.log("CommonList is called with config:", config);
  const { type } = config;
  const { data, isLoading, error } = useQuery({
    queryKey: [type],
    queryFn: () => ExpressServerApis.get(config.endpoint),
    refetchOnWindowFocus: false,
    retry: 2,
    staleTime: 5000,
  });
  const [checkedRows, setCheckedRows] = useState(new Set());
  const [highlightedId, setHighlightedId] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(0);

  //console.log('custParams', custParams);

  
  const handleCheckboxClick = (event, id) => {
    event.stopPropagation();
    const newCheckedRows = new Set(checkedRows);
    
    if (newCheckedRows.has(id)) {
      newCheckedRows.delete(id);
    } else {
      newCheckedRows.add(id);
    }
    setCheckedRows(newCheckedRows);
    updateCheckedRows(newCheckedRows);
  };

  const handleRowClick = (event, id, index) => {
    setHighlightedId(id);
    setCurrentPosition(index);
    onRowSelectionChange(id);
  };

  const handleCalcitePaginationChange = (target) => {
    console.log('handleCalcitePaginationChange', target);
    setCurrentPosition(target.startItem);
  };

  if (isLoading) return <div>Loading {type}s...</div>;
  if (error) return <div>Error: {error}</div>;
  //if (data) console.log('no data found', data);



    return (
    <div className="common-list-container">
      <CalciteTable>
        <CalciteTableRow slot="table-header" key="header-row">
          {config.headers.map((header) => (
            <CalciteTableHeader 
              key={`header-${header.id}`} 
              heading={header.heading}
              style={{ width: header.width }}
            />
          ))}
        </CalciteTableRow>
        
        {data && data.data.map((item, index) => {
                let rowClassName = 'unhighlighted-row';
                const itemId = type === 'well' ? item.api : item.leaseNumber;
                
                if (highlightedId === itemId) {
                  rowClassName = 'highlighted-row';
                }
                //console.log("itemId", itemId);
                return (  
                  <CalciteTableRow 
                    key={`row-${itemId}`}
                    onClick={(event) => handleRowClick(event, itemId, index)}
                    className={rowClassName}
                  >
                    {config.headers.map(header => (
                      header.id === 'checkbox' ? (
                        <CalciteTableCell key={`cell-checkbox-${itemId}`} class="checkbox-cell">
                          <input 
                            type="checkbox"
                            checked={checkedRows.has(itemId)}
                            onChange={(event) => handleCheckboxClick(event, itemId)}
                            onClick={(event) => event.stopPropagation()}
                          />
                        </CalciteTableCell>
                      ) : (
                        <CalciteTableCell key={`cell-${header.id}-${itemId}`}>
                          {config.cellValues[header.id](item)}
                        </CalciteTableCell>
                      )
                    ))}
                  </CalciteTableRow>
                );
        })
        }
      </CalciteTable>
      {config.pageEnabled && data && data.data.length > 0 &&
      <CalcitePagination
        onCalcitePaginationChange={(e) => {handleCalcitePaginationChange(e.target);  }}
        pageSize={config.pageSize}
        startItem={0}
        totalItems={data.data.length}
      />
      }
    </div>
  );
};

export default CommonList; 



// const handleCheckAll = () => {
//   if (!data) return;
//   const allIds = data.data.map(item => type === 'well' ? item.api : item.leaseNumber);
//   setCheckedRows(new Set(allIds));
//   updateCheckedRows(new Set(allIds));
// };

// const handleUncheckAll = () => {
//   setCheckedRows(new Set());
//   updateCheckedRows(new Set());
// };

// const handleReverseChecked = () => {
//   if (!data) return;
//   const allIds = data.data.map(item => type === 'well' ? item.api : item.leaseNumber);
//   const newCheckedRows = new Set(
//     allIds.filter(id => !checkedRows.has(id))
//   );
//   setCheckedRows(newCheckedRows);
//   updateCheckedRows(newCheckedRows);
// };

// const handleMoveFirst = () => {
//   setCurrentPosition(0);
//   const firstId = data.data[0]?.[type === 'well' ? 'api' : 'leaseNumber'];
//   if (firstId) {
//     setHighlightedId(firstId);
//     onRowSelectionChange(firstId);
//   }
// };

// const handleMovePrevious = () => {
//   if (currentPosition > 0) {
//     const newPosition = currentPosition - 1;
//     setCurrentPosition(newPosition);
//     const id = data.data[newPosition]?.[type === 'well' ? 'api' : 'leaseNumber'];
//     if (id) {
//       setHighlightedId(id);
//       onRowSelectionChange(id);
//     }
//   }
// };

// const handleMoveNext = () => {
//   if (currentPosition < data.data.length - 1) {
//     const newPosition = currentPosition + 1;
//     setCurrentPosition(newPosition);
//     const id = data.data[newPosition]?.[type === 'well' ? 'api' : 'leaseNumber'];
//     if (id) {
//       setHighlightedId(id);
//       onRowSelectionChange(id);
//     }
//   }
// };

// const handleMoveLast = () => {
//   const lastIndex = data.data.length - 1;
//   setCurrentPosition(lastIndex);
//   const lastId = data.data[lastIndex]?.[type === 'well' ? 'api' : 'leaseNumber'];
//   if (lastId) {
//     setHighlightedId(lastId);
//     onRowSelectionChange(lastId);
//   }
// };
