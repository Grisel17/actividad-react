import { Container, Typography, Box, Paper, Avatar, Grid, Chip, Card, CardContent } from '@mui/material';
import fotografia from '../assets/fotografia.jpeg';

function Acerca() {
  const habilidades = ['HTML', 'CSS', 'JavaScript', 'React', 'Material-UI', 'Node.js'];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{
          color: '#6b46c1',
          fontWeight: 700,
          mb: 6,
        }}
      >
        Acerca de mí
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Avatar
              src={fotografia}
              alt="Foto de perfil"
              sx={{
                width: 250,
                height: 250,
                boxShadow: '0 10px 40px rgba(107, 70, 193, 0.2)',
                border: '5px solid #6b46c1',
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card 
            elevation={4}
            sx={{
              borderTop: '5px solid #6b46c1',
              borderRadius: '12px',
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom 
                sx={{ color: '#6b46c1', fontWeight: 700 }}
              >
                Grisel Silva
              </Typography>

              <Typography 
                variant="h6" 
                sx={{ color: '#8b5cf6', fontWeight: 600, mb: 3 }}
              >
                Ingeniería en Sistemas
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  mt: 3, 
                  fontSize: '1.05rem', 
                  lineHeight: 1.8,
                  color: '#555',
                  mb: 3,
                }}
              >
                Soy estudiante apasionada por el desarrollo web y nuevas tecnologías. 
                Me interesa crear aplicaciones funcionales y modernas que resuelvan problemas reales.
                Tengo experiencia trabajando con React y disfruto aprendiendo tecnologías nuevas cada día.
                Mi objetivo es convertirme en una desarrolladora full-stack competente y seguir mejorando mis habilidades.
                Creo que la tecnología es una herramienta poderosa para cambiar el mundo.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ color: '#6b46c1', fontWeight: 700 }}
                >
                  Habilidades
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                  {habilidades.map((habilidad) => (
                    <Chip
                      key={habilidad}
                      label={habilidad}
                      sx={{
                        backgroundColor: '#6b46c1',
                        color: '#fff',
                        fontSize: '0.95rem',
                        py: 2.5,
                        px: 1,
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#5a3aa0',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Acerca;