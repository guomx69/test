export const VectorServices = [
  {
    url: "https://tiles.arcgis.com/tiles/UxqqIfhng71wUT9x/arcgis/rest/services/Regions_Firefly_VT_Thin/VectorTileServer/",
   // url: "https://basemaps.arcgis.com/arcgis/rest/services/World_Basemap_v2/VectorTileServer/",
    title: "Region Firefly VT Thin",
    opacity: 0.5,
    visible: true,
    // style: {
    //   // Optional custom style object
    // },
    minScale: 0,
    maxScale: 0,
   // apiKey: "optional_api_key"
  },

  {
    url: "https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/Microsoft_Building_Footprints/VectorTileServer/",
    title: "Building Footprints",
    opacity: 0.5,
    visible: false,
  }
  // Add more vector tile services as needed
];