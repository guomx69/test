import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ExpressServerApis } from '../../../../libs/utils/apiCalls';
import DetailTabs from './tabs/DetailTabs';
import WellDataViewerDetailsPanel from './WellDataViewerDetailsPanel';
import { DETAILS_SETTINGS } from '../constants/listDetailsSettings';
import './WellDataViewerDetails.css';

const WellConfig = DETAILS_SETTINGS["WELL_DATA"];

const WellDataViewerDetails = ({ selectedApi }) => { //console.log("DataViewerWellDetails is called with selectedApi:", selectedApi);
  const { data, isLoading, error } = useQuery({
    queryKey: [selectedApi],
    queryFn: () => ExpressServerApis.get(`/api/v1/wells/${selectedApi}`),
    enabled: !!selectedApi
  });
  const [dataset, setDataset] = useState([]);
  const [tabs, setTabs] = useState([]);
  
  
  useEffect(() => { 
      //console.log("data",data);
      if(data){  //console.log("data.data.is_prod_group",data.data.is_prod_group);
        const prodGroup = data.data.is_prod_group ? "Prod_group" : "Non_prod_group";


        setTabs(WellConfig["SITE_DATA"][prodGroup].tabs);
        //const dummyData = getDummyData(prodGroup, "SITE_DATA"); setDataset(dummyData);
        setDataset(data.data); //should be:setDataset(data["SITE_DATA"]);
      }
  }, [data]);

  if (isLoading) return <div>Loading {selectedApi} details...</div>;
  if (error) return <div>Error: {error}</div>;

  const onViewWellTypes = (wellDataType) => {
    if(wellDataType === "SITE_DATA"||wellDataType === "COMPLETION_DATA"){
        const prodGroup = data.data.is_prod_group ? "Prod_group" : "Non_prod_group";
        setTabs(WellConfig[wellDataType][prodGroup].tabs);
        //const dummyData = getDummyData(prodGroup, wellDataType); setDataset(dummyData);
        setDataset(data.data); //should be:setDataset(data[wellDataType]);
     
    }
    else{
        setTabs(WellConfig[wellDataType].tabs);
        //const dummyData = getDummyData(wellDataType); setDataset(dummyData);
        setDataset(data.data); //should be:setDataset(data[wellDataType]);
    }
  };
  
  return (
    <div className="well-details-wrapper">
        <WellDataViewerDetailsPanel onViewWellTypes={onViewWellTypes} />
        <DetailTabs data={dataset} tabs={tabs} />
    </div>
  );
};

export default WellDataViewerDetails; 