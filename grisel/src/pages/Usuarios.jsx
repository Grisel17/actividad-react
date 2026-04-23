import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
  Box
} from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

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

function Usuarios() {
// Se guarda la informacion usando useState en el estado de Usuarios //
  const [usuarios, setUsuarios] = useState([]);
// Se utiliza useEffect para cargar los datos de los usuarios//
  useEffect(() => {
// Se utiliza fetch para obtener los datos de los usuarios desde la API (URL que permite intercambiar/consultar datos)//  
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box>
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ color: '#6b46c1', fontWeight: 700, mb: 3 }}
        >
          Listado de Usuarios
        </Typography>
        <TableContainer component={Paper} elevation={4} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Correo</StyledTableCell>
                <StyledTableCell>Teléfono</StyledTableCell>
                <StyledTableCell>Sitio web</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
  
  {/* Devuelve el array listado correspondiente a cada elemento*/}
              {usuarios.map((usuario) => (
                <StyledTableRow key={usuario.id}>
                  <StyledTableCell>{usuario.name}</StyledTableCell>
                  <StyledTableCell>{usuario.email}</StyledTableCell>
                  <StyledTableCell>{usuario.phone}</StyledTableCell>
                  <StyledTableCell>{usuario.website}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default Usuarios;