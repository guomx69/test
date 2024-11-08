import React from 'react';
import { useAuth } from '../../cores/contexts/AuthContext';
import { useNavigate ,useLocation} from 'react-router-dom';

import "@esri/calcite-components/dist/components/calcite-list"
import "@esri/calcite-components/dist/components/calcite-list-item";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-scrim";

 import "@esri/calcite-components/dist/calcite/calcite.css";

import { 
  CalciteList,
  CalciteListItem,
  CalciteShell,
  CalciteScrim
} from '@esri/calcite-components-react';


export const Reservations=()=> {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { user,setResvRightsAsync,isLoading, setIsLoading} = useAuth();
    console.log(user)

    const getInfoForResv=async(resv)=>{
        setIsLoading(true)
        console.log(`Edit ${resv}`,from);
        const isSuccess=await setResvRightsAsync(resv);
        if(isSuccess==true)
            navigate(from, { replace: true });
        
        setIsLoading(false);
    }
 
  return (
    <div>
      {/* <CalciteScrim loading={isLoading}></CalciteScrim> */}
      <h1>Welcome to Reservation App {user.name}</h1>
      <p>Please Click one of Reservations to start the App</p>
      <CalciteShell>
             
      <CalciteList>
        {user.reservations.map((item, index) => (
          <CalciteListItem
            key={index}
            label={item}
            onClick={()=>getInfoForResv(item)}
            selectionMode="single"
          />   
        ))}
      </CalciteList>
      
      </CalciteShell>
      
    </div>
  );
}
export default Reservations;






const ItemList=({ items })=>{
  // Sample metadata for items
  const getItemMetadata = (item) => ({
    icon: item.type === 'folder' ? 'folder' : 'file',
    status: item.status || 'idle',
    tags: item.tags || []
  });

  return (
    <CalciteList>
      {items.map((item, index) => {
        const metadata = getItemMetadata(item);
        
        return (
          <CalciteListItem
            key={index}
            label={item.label}
            description={item.description}
            value={item.value}
          >
            {/* Leading content - Icon */}
            <CalciteIcon
              slot="start-content"
              icon={metadata.icon}
              scale="s"
            />

            {/* Trailing content - Actions and status */}
            <div slot="end-content" style={{ display: 'flex', gap: '0.5rem' }}>
              {/* Tags */}
              {metadata.tags.map((tag, tagIndex) => (
                <CalciteChip
                  key={tagIndex}
                  scale="s"
                  value={tag}
                >
                  {tag}
                </CalciteChip>
              ))}

              {/* Actions */}
              <CalciteAction
                icon="edit"
                scale="s"
                onClick={() => console.log(`Edit ${item.label}`)}
              />
              <CalciteAction
                icon="trash"
                scale="s"
                onClick={() => console.log(`Delete ${item.label}`)}
              />
            </div>
          </CalciteListItem>
        );
      })}
    </CalciteList>
  );
}