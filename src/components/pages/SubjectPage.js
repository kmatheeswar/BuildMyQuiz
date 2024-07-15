import React from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const skills = [
  { id: 1, name: 'Addition', subjectId: 1 },
  { id: 2, name: 'Subtraction', subjectId: 1 },
  { id: 3, name: 'Planets', subjectId: 2 },
  // Add more skills
];

const SubjectPage = () => {
  const { subjectId } = useParams();
  const filteredSkills = skills.filter(skill => skill.subjectId === parseInt(subjectId));

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Skills</Typography>
      <Grid container spacing={3}>
        {filteredSkills.map(skill => (
          <Grid item key={skill.id} xs={12} md={4}>
            <Paper style={{ padding: '16px', textAlign: 'center' }}>
              <Typography variant="h5">{skill.name}</Typography>
              <Button variant="contained" color="primary" component={Link} to={`/skill/${skill.id}`}>
                Practice
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SubjectPage;
