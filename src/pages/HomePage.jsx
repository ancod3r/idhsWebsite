import React from 'react';
import { Container, Typography, Button, Box, useTheme } from '@mui/material';
import Services from "../pages/Services.jsx"
import About from './About.jsx';
import Contact from './Contact.jsx';

const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundPosition: 'left',
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          height: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant="h1" gutterBottom>
          Enhancing and Transforming healthcare services.
        </Typography>

        <Button variant="contained" color="secondary" size="large" href="/launching-soon">
          Download app
        </Button>
      </Box>
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Services />
        <About />
      </Container>
      <Contact />
    </>
  );
};

export default HomePage;
