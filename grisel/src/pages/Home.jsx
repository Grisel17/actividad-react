import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Home() {
  return (
    <Container maxWidth="md" sx={{ py: 10 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            fontWeight: 700, 
            color: '#6b46c1',
            mb: 3,
            background: 'linear-gradient(135deg, #6b46c1 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          ¡Bienvenido a mi Portafolio!
        </Typography>
        
        <Paper 
          elevation={6} 
          sx={{ 
            p: 6, 
            mt: 4, 
            backgroundColor: '#fff',
            borderTop: '5px solid #6b46c1',
            borderRadius: '12px',
          }}
        >
          <Typography 
            variant="h5" 
            component="h2" 
            gutterBottom
            sx={{ color: '#6b46c1', fontWeight: 600, mb: 3 }}
          >
            Desarrolladora Web
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              color: '#555',
              mb: 4,
            }}
          >
            Soy estudiante de Ingeniería en Sistemas apasionada por el desarrollo web
            y la creación de aplicaciones modernas y funcionales. Aquí encontrarás información
            sobre mí, mis proyectos y cómo contactarme.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mt: 4 }}>
            <Button 
              variant="contained" 
              component={RouterLink}
              to="/acerca"
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
              endIcon={<ArrowForwardIcon />}
            >
              Conocer más
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Home;