import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {
  const {keyId, key} = useSelector(state => state.keys.googleMaps);

  const { isLoaded } = useJsApiLoader({
    id: keyId,
    googleMapsApiKey: key
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded && (
    <GoogleMap
      // mapContainerStyle={containerStyle}
      // center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
  )
}

export default Map;
