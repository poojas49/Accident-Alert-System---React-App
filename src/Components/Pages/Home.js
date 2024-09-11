
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
//import MapComponent from './mapComponents';

function Map(){
  return <GoogleMap defaultZoom={10} defaultCenter={{lat:12.982990, lng:77.585098}}/>;
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

function Home() {
 //return <MapComponent/>;

  
  return <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB8ju8BOe70lajfTRuMC0k4HWVDYHp0yu0"}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100vh` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    style={{height: '100vh', width: '100%'}}/>;
    
  /*  
  return(
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
    </div>
  );
*/    
  
}

export default Home;
