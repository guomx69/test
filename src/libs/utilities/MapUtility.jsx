import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";

export const addMapServices = (map, services) => {
  if (!map) return;

  services.forEach(service => {
    const layer = new MapImageLayer({
      url: service.url,
      title: service.title,
      opacity: service.opacity,
      visible: service.visible
    });
    
    map.add(layer);
  });
}; 

export const addFeatureService = (map, services) => {
  if (!map) return;

  services.forEach(service => {
    const layer = new FeatureLayer({
      url: service.url,
      title: service.title,
      opacity: service.opacity,
      visible: service.visible,
      outFields: ["*"],
      popupTemplate: {
        title: "{NAME}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "NAME",
                label: "Name"
              },
              {
                fieldName: "TRIBE_NAME",
                label: "Tribe Name"
              },
              {
                fieldName: "STATE_NAME",
                label: "State"
              }
            ]
          }
        ]
      }
    });
    
    map.add(layer);
  });
};