export const FeatureServices ={
    
    bia_regions: {
    url:"https://biamaps.geoplatform.gov/server/rest/services/BOGS/BIA_Regions/FeatureServer/",
    title:"BIA Regions",
    opacity: 0.5,
    visible: false,
    outFields: ["REGIONCODE","REGIONNAME","Organization"],
    popupTemplate:{
        title: "{REGIONNAME}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "REGIONNAME",
                label: "Name"
              },
              {
                fieldName: "REGIONCODE",
                label: "Region Code"
              },
              {
                fieldName: "Organization",
                label: "Organization"
              }
            ]
          }
        ]
      }
    },
    BIA_Agency_and_Regional_Offices: {
      url:"https://services1.arcgis.com/UxqqIfhng71wUT9x/arcgis/rest/services/BIA_Agency_and_Regional_Offices/FeatureServer/",
      title:"BIA Agency and Regional Offices",
      opacity: 0.6,
      visible: true,
      outFields: ["*"],
      popupTemplate: {
        title: "{OfficeName}",
        content: [
          {
            type: "fields",
            fieldInfos: [
              {
                fieldName: "OfficeName",
                label: "Office Name",
                visible: true
              },
              {
                fieldName: "OfficeType",
                label: "Office Type",
                visible: true
              },
              {
                fieldName: "Region",
                label: "Region Name",
                visible: true
              },
              {
                fieldName: "ADDRESS",
                label: "Address",
                visible: true
              },
              {
                fieldName: "CITY",
                label: "City",
                visible: true
              },
              {
                fieldName: "STATE",
                label: "State",
                visible: true
              },
              {
                fieldName: "ZIP",
                label: "ZIP Code",
                visible: true
              },
              {
                fieldName: "PHONE",
                label: "Phone",
                visible: true
              }
            ]
          },
          {
            type: "text",
            text: "Contact Information: {PHONE}"
          }
        ],
        actions: [
          {
            title: "Office Website",
            id: "office-website",
            className: "esri-icon-launch-link-external"
          }
        ]
      }
    }

  };