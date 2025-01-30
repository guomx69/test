import React, { useEffect, useState } from 'react';
import { 
  CalciteTable,
  CalcitePagination,
  CalciteTableRow,
  CalciteTableCell,
  CalciteTableHeader,
  CalcitePanel
} from '@esri/calcite-components-react';
import "@esri/calcite-components/dist/components/calcite-table";
import "@esri/calcite-components/dist/components/calcite-table-row";
import "@esri/calcite-components/dist/components/calcite-table-cell";
import "@esri/calcite-components/dist/components/calcite-table-header";
import "@esri/calcite-components/dist/components/calcite-pagination";
import "@esri/calcite-components/dist/components/calcite-panel";
import PropTypes from 'prop-types';

// Niogems DataTable Component
const CommonListNiogems = ({ 
  updateCheckedRows,
  onRowSelectionChange,
  custParams, 
  config
}) => {
  const [checkedRows, setCheckedRows] = useState(new Set());
  const [highlightedId, setHighlightedId] = useState(null);
  const [data, setData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const { renderRow, title, columns = [], fetchData, pageSize = 10 } = config;

  useEffect(() => {
    const loadData = async () => {
      console.log("loadData", currentPage, pageSize);
      setLoading(true);
      try {
        const { items, total } = await fetchData(currentPage, pageSize,custParams);
        setData(items || []);
        setTotalItems(total || 0);
      } catch (error) {
        console.error('Error loading data:', error);
        setData([]);
        setTotalItems(0);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [currentPage,custParams]);

 // console.log("custParams", custParams);
  // Check if columns is an array
  if (!Array.isArray(columns)) {
    console.error('columns prop must be an array');
    return <div>Error: Invalid columns configuration</div>;
  }

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

  const handleRowClick = (event, id) => {
    setHighlightedId(id);
    onRowSelectionChange(id);
  };
  const handleCalcitePaginationChange = (target) => { console.log("handleCalcitePaginationChange", target);
    setCurrentPage(target.startItem);
  };

  return (
    <CalcitePanel style={{ height: '40em' }}>
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
      
      <CalciteTable>
        <CalciteTableRow slot="table-header">
          <CalciteTableHeader 
              key={-9999} 
              
          />
          {columns.map((column) => (
            <CalciteTableHeader 
              key={column.field} 
              heading={column.title}
            />
                  
          ))}
        </CalciteTableRow>
        
        {loading ? (
          <CalciteTableRow>
            <CalciteTableCell colSpan={columns.length} className="text-center">
              Loading...
            </CalciteTableCell>
          </CalciteTableRow>
        ) : data && data.length > 0 ? (
          data.map((item) => { const id = item.attributes?.FID||item.id;
              return  (
              <CalciteTableRow key={id} onClick={(event) => handleRowClick(event, id)}>
                  <CalciteTableCell>
                  <input 
                    type="checkbox"
                    checked={checkedRows.has(id)}
                    onChange={(event) => handleCheckboxClick(event, id)}
                    onClick={(event) => event.stopPropagation()}
                    />
                    </CalciteTableCell>
                    {renderRow(item)}
              </CalciteTableRow>) 
          })
        ) : (
          <CalciteTableRow>
            <CalciteTableCell colSpan={columns.length} className="text-center">
              No data available
            </CalciteTableCell>
          </CalciteTableRow>
        )}
      </CalciteTable>

      {totalItems > 0 && (
        <CalcitePagination
          startItem={currentPage}
          pageSize={pageSize}
          totalItems={totalItems}
          onCalcitePaginationChange={(e) => {handleCalcitePaginationChange(e.target);  }}
          className="flex justify-center"
        />
      )}
    </CalcitePanel>
  );
};

CommonListNiogems.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })),
  
  pageSize: PropTypes.number
};



// <CommonListNiogems {...featureLayerConfig} />
// <CommonListNiogems {...externalApiConfig} pageSize={5} /> 
   

export default CommonListNiogems;