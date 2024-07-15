import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const subjects = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'Science' },
  // Add more subjects
];

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>Welcome to the Quiz App</Typography>
      <Grid container spacing={3}>
        {subjects.map(subject => (
          <Grid item key={subject.id} xs={12} md={4}>
            <Paper style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="h5">{subject.name}</Typography>
              <Button variant="contained" color="primary" component={Link} to={`/subject/${subject.id}`}>
                Explore
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
