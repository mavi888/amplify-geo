import './App.css';

import Amplify from 'aws-amplify';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';

import Header from './components/Header'
import Map from './components/Map'

import awsconfig from './aws-exports';

import { createMap } from "maplibre-gl-js-amplify"; 
import "maplibre-gl/dist/maplibre-gl.css";
import { drawPoints } from "maplibre-gl-js-amplify";


Amplify.configure(awsconfig);


//* ---- CONSTANTS ----- */

const INITIAL_VIEWPORT = {
  longitude: -56.164532,
  latitude: -34.901112,
}

function addStoreLocations(map, stores) {
  map.on("load", function () {
    drawPoints("mySourceName", stores, map,
        {
            showCluster: true,
            unclusteredOptions: {
                showMarkerPopup: true,
            },
            clusterOptions: {
                showCount: true,
            },
        }
    );
  });
}

function getStores() {
    const items = [
      {
        coordinates: [-56.15893363952637, -34.923871148988646],
        title: "Store Punta Carretas Shopping"
      },
      {
        coordinates: [-56.081106662750244, -34.881107970659976],
        title: "Store Portones Shopping"
      },
      {
        coordinates: [-55.99353790283203, -34.84022457866127],
        title: "Store Costa Urbana Shopping"
      },
      {
        coordinates: [-56.16732358932495, -34.86872361072668],
        title: "Store Nuevo Centro Shopping"
      },
      {
        coordinates: [-56.1361026763916, -34.9029674883098],
        title: "Store Montevideo Shopping"
      },
  ];
  return items;
}

const App = () => {

  const [map, setMap] = useState();

  useEffect(() => {

    const initializeMap = async () => {
      const map = 
        await createMap({
            container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
            center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
            zoom: 13,
        })
      setMap(map);
      const stores = getStores();
      addStoreLocations(map, stores);
  };

    initializeMap();

}, []);

  return (
    <AmplifyAuthenticator>
      <div className="App">
        <Header />
        <Map myMap={map}/>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;