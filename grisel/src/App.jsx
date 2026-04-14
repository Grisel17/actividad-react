import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Tablas from "./pages/Tablas";
import Navbar from "./components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: '#6b46c1',
      light: '#8b5cf6',
      dark: '#5a3aa0',
    },
    secondary: {
      main: '#6b46c1',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      color: '#6b46c1',
    },
    h2: {
      fontWeight: 600,
      color: '#6b46c1',
    },
    h3: {
      fontWeight: 600,
      color: '#6b46c1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/tablas" element={<Tablas />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;

