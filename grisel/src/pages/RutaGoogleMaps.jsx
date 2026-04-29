// Hook para manejar estado
import { useState } from "react";
import { Container, Typography, Box, Paper, Button, Stack } from "@mui/material";

// Componentes de Google Maps para React
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

// Coordenadas del punto de inicio: FIMAZ
const origen = {
  lat: 23.2313,
  lng: -106.4266,
};

// Coordenadas del destino: Plazuela Machado
const destino = {
  lat: 23.198342122167332,
  lng: -106.42319968940544,
};

// Estilo del mapa
const containerStyle = {
  width: "100%",
  height: "520px",
};

const mapOptions = {
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [{ color: "#f5f7fb" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#e7eef7" }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f8fafc" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#cce4ff" }, { lightness: -10 }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#5b6a7c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
  ],
  disableDefaultUI: true,
  zoomControl: true,
  mapTypeControl: false,
  streetViewControl: false,
  fullscreenControl: false,
};

export default function RutaGoogleMaps() {
  // Estado donde guardamos la ruta
  const [directions, setDirections] = useState(null);

  // Carga de la API de Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const rutaInfo = directions?.routes?.[0]?.legs?.[0];

  // Función para calcular la ruta
  const calcularRuta = () => {

    // Servicio de rutas de Google
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: origen, // Punto inicial (FIMAZ)
        destination: destino, // Punto final (Machado)

        // Tipo de transporte
        travelMode: window.google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK") {
          // Guardamos la ruta
          setDirections(result);
        } else {
          console.error("Error al calcular la ruta:", status);
        }
      }
    );
  };

  // Mientras carga el mapa
  if (!isLoaded) {
    return (
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h6">Cargando mapa...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#6b46c1",
            mb: 2,
            background: "linear-gradient(135deg, #6b46c1 0%, #8b5cf6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Ruta de FIMAZ a Plazuela Machado
        </Typography>
      </Box>

      <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
        <Paper
          elevation={6}
          sx={{
            flex: 2,
            borderRadius: "24px",
            overflow: "hidden",
            minHeight: 520,
            display: "flex",
            flexDirection: "column",
          }}
        >

          <Box sx={{ flex: 1 }}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={origen}
              zoom={13}
              options={mapOptions}
            >
              <Marker position={origen} label="FIMAZ" />
              <Marker position={destino} label="Machado" />
              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    polylineOptions: {
                      strokeColor: "#6b46c1",
                      strokeOpacity: 0.95,
                      strokeWeight: 7,
                    },
                    suppressMarkers: true,
                  }}
                />
              )}
            </GoogleMap>
          </Box>
        </Paper>

        <Paper
          elevation={6}
          sx={{
            flex: 1,
            borderRadius: "24px",
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Control de ruta
            </Typography>
            <Typography variant="body2" sx={{ color: "#4b5563", mb: 3, lineHeight: 1.75 }}>
              Calcula la ruta y obtén los datos de distancia y duración en tiempo real.
              Si deseas volver a iniciar el estado del mapa, usa el botón de reinicio.
            </Typography>

            <Stack spacing={2}>
              <Button
                variant="contained"
                size="large"
                onClick={calcularRuta}
                sx={{
                  px: 4,
                  py: 1.7,
                  fontWeight: 700,
                  borderRadius: "12px",
                  textTransform: "none",
                }}
              >
                Calcular ruta
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="secondary"
                onClick={() => setDirections(null)}
                sx={{
                  px: 4,
                  py: 1.7,
                  fontWeight: 700,
                  borderRadius: "12px",
                  textTransform: "none",
                }}
              >
                Reiniciar ruta
              </Button>
            </Stack>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle2" sx={{ color: "#6b7280", mb: 2 }}>
              Datos de la ruta
            </Typography>
            <Box sx={{ display: "grid", gap: 2 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", color: "#374151" }}>
                <Typography>Origen</Typography>
                <Typography fontWeight={700}>FIMAZ</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", color: "#374151" }}>
                <Typography>Destino</Typography>
                <Typography fontWeight={700}>Plazuela Machado</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", color: "#374151" }}>
                <Typography>Distancia</Typography>
                <Typography fontWeight={700}>{rutaInfo?.distance?.text ?? "--"}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", color: "#374151" }}>
                <Typography>Duración</Typography>
                <Typography fontWeight={700}>{rutaInfo?.duration?.text ?? "--"}</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Stack>
    </Container>
  );
}