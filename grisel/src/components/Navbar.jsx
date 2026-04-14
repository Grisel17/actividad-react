import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Box } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#6b46c1', boxShadow: '0 4px 20px rgba(107, 70, 193, 0.15)' }}>
      <Toolbar sx={{ justifyContent: 'center', gap: 3 }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: '1.1rem',
            padding: '10px 20px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            borderBottom: isActive ? '3px solid #fff' : 'none',
          })}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/acerca"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: '1.1rem',
            padding: '10px 20px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            borderBottom: isActive ? '3px solid #fff' : 'none',
          })}
        >
          Acerca de mí
        </NavLink>

        <NavLink
          to="/contacto"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: '1.1rem',
            padding: '10px 20px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            borderBottom: isActive ? '3px solid #fff' : 'none',
          })}
        >
          Contacto
        </NavLink>

        <NavLink
          to="/tablas"
          style={({ isActive }) => ({
            color: isActive ? '#fff' : 'rgba(255,255,255,0.7)',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: '1.1rem',
            padding: '10px 20px',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            borderBottom: isActive ? '3px solid #fff' : 'none',
          })}
        >
          Tablas
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;