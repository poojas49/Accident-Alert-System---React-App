/*global google*/
import React from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps'

class MapComponent extends React.Component {
  constructor(props){
    super(props)
  }
render() {
    const DirectionsComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNBGJ3WjKexAHHiZ8cykePmhJoLGq-QLM",
        loadingElement: <div style={{ height: `100vh` }} />,
        containerElement: <div style={{ width: `100%` }} />,
          mapElement: <div style={{ height: `100vh`, width: `50%` }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() { 
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: new google.maps.LatLng(18.507071, 73.959358),
            destination: new google.maps.LatLng(18.490000, 73.822441),
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
this.setState({
                directions: {...result},
                markers: true
              })
            } else {
              console.error(`error fetching directions ${result}`);
            }
          });
        }
      })
    )(props =>
      <GoogleMap
        defaultZoom={3}
      >
        {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>
    );
return (
        <DirectionsComponent
        />
    )
  }
}
export default MapComponent