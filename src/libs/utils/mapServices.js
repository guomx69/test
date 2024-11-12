import MapImageLayer from "@arcgis/core/layers/MapImageLayer.js";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";

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
      outFields:service.outFields || ["*"],
      popupTemplate: service.popupTemplate || null
    });
    
    map.add(layer);
  });
};

export const addVectorService = (map, services) => {
  if (!map) return;

  services.forEach(service => {
    const layer = new VectorTileLayer({
      url: service.url,
      title: service.title,
      opacity: service.opacity,
      visible: service.visible,
      style: service.style || undefined,
      apiKey: service.apiKey || undefined
    });

    // Add any custom styling if provided
    if (service.customStyle) {
      layer.style = service.customStyle;
    }

    // Handle any additional vector-specific properties
    if (service.minScale) {
      layer.minScale = service.minScale;
    }
    if (service.maxScale) {
      layer.maxScale = service.maxScale;
    }

    map.add(layer);
  });
};