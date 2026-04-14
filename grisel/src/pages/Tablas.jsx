import { useState, useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography, Box, Button, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6b46c1',
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: '1rem',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '0.95rem',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(107, 70, 193, 0.05)',
  },
  '&:hover': {
    backgroundColor: 'rgba(107, 70, 193, 0.1)',
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

function Tablas() {
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
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 8 }}>
        <Card 
          elevation={4}
          sx={{
            borderTop: '5px solid #6b46c1',
            borderRadius: '12px',
            textAlign: 'center',
          }}
        >
          <CardContent sx={{ p: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4, flexWrap: 'wrap' }}>
              <img src={heroImg} width="100" height="110" alt="Hero" style={{ borderRadius: '8px' }} />
              <img src={reactLogo} width="100" alt="React logo" />
              <img src={viteLogo} width="100" alt="Vite logo" />
            </Box>

            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{ color: '#6b46c1', fontWeight: 700, mb: 1 }}
            >
              Contador
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ color: '#666', fontSize: '1.1rem', mb: 4 }}
            >
              Contador con límite de 0 a 10
            </Typography>

            <Paper 
              elevation={0}
              sx={{
                p: 4,
                backgroundColor: 'rgba(107, 70, 193, 0.1)',
                borderRadius: '8px',
                mb: 4,
              }}
            >
              <Typography 
                variant="h2" 
                sx={{ 
                  color: '#6b46c1', 
                  fontWeight: 700,
                  transition: 'all 0.3s ease',
                }}
              >
                {count}
              </Typography>
            </Paper>

            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained"
                onClick={() => setCount(count + 1)}
                sx={{
                  backgroundColor: '#6b46c1',
                  color: '#fff',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#5a3aa0',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(107, 70, 193, 0.3)',
                  },
                }}
                startIcon={<AddIcon />}
              >
                Incrementar
              </Button>

              <Button 
                variant="outlined"
                onClick={() => setCount(count - 1)}
                sx={{
                  borderColor: '#6b46c1',
                  color: '#6b46c1',
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  border: '2px solid #6b46c1',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(107, 70, 193, 0.1)',
                    borderColor: '#5a3aa0',
                    transform: 'translateY(-2px)',
                  },
                }}
                endIcon={<RemoveIcon />}
              >
                Decrementar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ color: '#6b46c1', fontWeight: 700, mb: 3 }}
        >
          Listado de Personas
        </Typography>
        <CustomizedTables />
      </Box>
    </Container>
  )
}

function CustomizedTables() {
  return (
    <TableContainer component={Paper} elevation={4} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
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
                  backgroundColor: esMenor ? '#ffebee' : 'inherit'
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

export default Tablas
