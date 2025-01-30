import CommonList from './list/CommonList';

const LeaseList = ({ updateCheckedRows, onRowSelectionChange }) => {
  return (
    <CommonList 
      type="LEASE"
      updateCheckedRows={updateCheckedRows}
      onRowSelectionChange={onRowSelectionChange}
    />
  );
};

export default LeaseList; 