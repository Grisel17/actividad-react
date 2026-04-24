import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.2494,
  lng: -106.4111
};

function Mapa() {
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        
        <Marker position={center} onClick={() => setMostrarInfo(true)} />

        {mostrarInfo && (
          <InfoWindow position={center} onCloseClick={() => setMostrarInfo(false)}>
            <div>
              <h3>Mi ubicación</h3>
              <p>Marcador de ejemplo</p>
            </div>
          </InfoWindow>
        )}

      </GoogleMap>
    </LoadScript>
  );
}

export default Mapa;