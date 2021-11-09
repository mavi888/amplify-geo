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

Amplify.configure(awsconfig);


//* ---- CONSTANTS ----- */

const INITIAL_VIEWPORT = {
  longitude: -56.164532,
  latitude: -34.901112,
}


const App = () => {

  const [map, setMap] = useState();

  useEffect(() => {
    const initializeMap = async () => {
        setMap( 
        await createMap({
            container: "map", // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js-docs/api/map/
            center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
            zoom: 13,
        })
    )};

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