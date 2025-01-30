import Details from './tabs/DetailTabs';

const LeaseDetails = ({ selectedLeaseId }) => {
  return <Details type="LEASE" selectedId={selectedLeaseId} />;
};

export default LeaseDetails; 