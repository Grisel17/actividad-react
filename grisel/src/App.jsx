import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6b46c1',
    color: theme.palette.common.white,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const personas = [
  { nombre: "Guadalupe", apellido: "Sànchez", edad: 55 },
  { nombre: "Antonio", apellido: "Silva", edad: 60 },
  { nombre: "Kenia", apellido: "García", edad: 25 },
  { nombre: "Brandon", apellido: "Hernández", edad: 17 },
  { nombre: "Ariadna", apellido: "Martínez", edad: 15 },
  { nombre: "Grisel", apellido: "Silva", edad: 22 }
];

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 10) {
      alert("El valor máximo es 10")
      setCount(10)
    }

    if (count < 0) {
      setCount(0)
    }
  }, [count])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>Contador</h1>
          <p>Contador con límite de 0 a 10</p>
        </div>

        <h2>{count}</h2>

        <button
          className="counter"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>

        <button
          className="counter"
          onClick={() => setCount(count - 1)}
        >
          Decrementar
        </button>
      </section>

      <CustomizedTables />
    </>
  )
}

function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Apellido</StyledTableCell>
            <StyledTableCell align="right">Edad</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {personas.map((persona, index) => {
            const esMenor = persona.edad <= 17;

            return (
              <StyledTableRow
                key={index}
                sx={{
                  backgroundColor: esMenor ? '#ffebee' : 'inherit' // fondo rojo claro
                }}
              >
                <StyledTableCell
                  sx={{ color: esMenor ? 'red' : 'inherit', fontWeight: esMenor ? 'bold' : 'normal' }}
                >
                  {persona.nombre}
                </StyledTableCell>

                <StyledTableCell
                  sx={{ color: esMenor ? 'red' : 'inherit' }}
                >
                  {persona.apellido}
                </StyledTableCell>

                <StyledTableCell
                  align="right"
                  sx={{ color: esMenor ? 'red' : 'inherit' }}
                >
                  {persona.edad}
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App
