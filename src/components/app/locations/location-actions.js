export const LOADING_LOCATIONS = 'LOADING_LOCATIONS';
function loadingLocations() {
  return {
    type: LOADING_LOCATIONS,
    loading: true,
  };
}

export const LOADING_LOCATIONS_SUCCEEDED = 'LOADING_LOCATIONS_SUCCEEDED';
function loadingLocationsSucceeded(locationsList) {
  return {
    type: LOADING_LOCATIONS_SUCCEEDED,
    locationsList: locationsList,
    loading: true,
    isError: false,
  };
}

export const LOADING_LOCATIONS_FAILED = 'LOADING_LOCATIONS_FAILED';
function loadingLocationsFailed(error) {
  return {
    type: LOADING_LOCATIONS_FAILED,
    isError: false,
    error: error,
  };
}

export function loadLocations(categoryId) {
  return function(dispatch) {
    dispatch(loadingLocations());
    setTimeout(function () {
      var locationsList = [];

      // motionsspår:
      if (categoryId == "a4116a6a-af53-4672-b492-01d7adeae987") {
        locationsList = 
        [
          {
            "GeographicalPosition": {
              "X": 6576068,
              "Y": 1632168,
            },
            "Id": "0191b0b3-1812-4ddd-a833-c69111551bad",
            "Name": "Kärrtorpsspåret (ett motionsspår)",
            "TimeCreated": "/Date(1210839818360+0200)/",
            "TimeUpdated": "/Date(1401200922440+0200)/",
          },
          {
            "GeographicalPosition": {
              "X": 6574299,
              "Y": 1624955,
            },
            "Id": "8ddac468-da8a-4b3c-9051-0a1425533e9b",
            "Name": "Älvsjöskogens motionsspår",
            "TimeCreated": "/Date(1207303213590+0200)/",
            "TimeUpdated": "/Date(1419858429770+0100)/",
          },
        ];
      // sportfält:
      } else if (categoryId == "b21124af-65ab-48fb-a9c9-2a31a125ff5c"){
        locationsList = 
        [
          {
            "GeographicalPosition": {
              "X": 6576068,
              "Y": 1632168,
            },
            "Id": "0191b0b3-1812-4ddd-a833-c69111551bad",
            "Name": "Rymdfältet - ett sportfält",
            "TimeCreated": "/Date(1210839818360+0200)/",
            "TimeUpdated": "/Date(1401200922440+0200)/",
          },
          {
            "GeographicalPosition": {
              "X": 6574299,
              "Y": 1624955,
            },
            "Id": "8ddac468-da8a-4b3c-9051-0a1425533e9b",
            "Name": "Hälleflundrans fält",
            "TimeCreated": "/Date(1207303213590+0200)/",
            "TimeUpdated": "/Date(1419858429770+0100)/",
          },
        ];

      } else {
        locationsList = 
        [
          {
            "GeographicalPosition": {
              "X": 6574299,
              "Y": 1624955,
            },
            "Id": "0191b0b3-1812-4ddd-a833-c69111551bad",
            "Name": "Nån annan träningsplats",
            "TimeCreated": "/Date(1210839818360+0200)/",
            "TimeUpdated": "/Date(1401200922440+0200)/",
          },
          {
            "GeographicalPosition": {
              "X": 6574299,
              "Y": 1624955,
            },
            "Id": "8ddac468-da8a-4b3c-9051-0a1425533e9b",
            "Name": "Och en till annan träningsplats",
            "TimeCreated": "/Date(1207303213590+0200)/",
            "TimeUpdated": "/Date(1419858429770+0100)/",
          },
        ];
      }
      
      dispatch(loadingLocationsSucceeded(locationsList));
    }, 500);
    let isError = false;

    if (isError) {
      dispatch(loadingLocationsFailed('error message'));
    }
  };
}