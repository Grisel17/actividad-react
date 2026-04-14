import { Container, Typography, Box, Paper, Grid, Card, CardContent, IconButton, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contacto() {
  const contactos = [
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      titulo: 'Email',
      valor: 'grisel_silva17@hotmail.com',
      href: 'mailto:grisel.silva@example.com',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      titulo: 'Teléfono',
      valor: '669 113 1928',
      href: 'tel:+12345678900',
    },
  ];

  const redes = [
    {
      icon: <GitHubIcon sx={{ fontSize: 30 }} />,
      label: 'GitHub',
      href: '#',
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 30 }} />,
      label: 'LinkedIn',
      href: '#',
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        textAlign="center" 
        sx={{ 
          color: '#6b46c1', 
          fontWeight: 700,
          mb: 2,
        }}
      >
        Contacto
      </Typography>

      <Typography 
        variant="h6" 
        textAlign="center" 
        sx={{ color: '#666', mb: 6, fontSize: '1.1rem' }}
      >
        ¡Me encantaría escucharte! Ponte en contacto conmigo.
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
        {contactos.map((contacto, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              elevation={4}
              sx={{
                height: '100%',
                borderTop: '5px solid #6b46c1',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 15px 50px rgba(107, 70, 193, 0.2)',
                },
              }}
            >
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <IconButton 
                  sx={{ 
                    mb: 2,
                    color: '#6b46c1',
                    '&:hover': {
                      bgcolor: 'rgba(107, 70, 193, 0.1)',
                    },
                  }}
                >
                  {contacto.icon}
                </IconButton>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ color: '#6b46c1', fontWeight: 700 }}
                >
                  {contacto.titulo}
                </Typography>
                <Link
                  href={contacto.href}
                  sx={{
                    fontSize: '1.05rem',
                    color: '#555',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#6b46c1',
                      fontWeight: 600,
                    },
                  }}
                >
                  {contacto.valor}
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          borderLeft: '5px solid #6b46c1',
          borderRadius: '12px',
          backgroundColor: '#f9f9f9',
          mb: 4,
        }}
      >
        <Typography 
          variant="h6" 
          gutterBottom 
          textAlign="center"
          sx={{ color: '#6b46c1', fontWeight: 700 }}
        >
          Sígueme en redes sociales
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          {redes.map((red, index) => (
            <IconButton
              key={index}
              href={red.href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: '#6b46c1',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(107, 70, 193, 0.1)',
                  transform: 'scale(1.2)',
                },
              }}
              aria-label={red.label}
            >
              {red.icon}
            </IconButton>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}

export default Contacto;