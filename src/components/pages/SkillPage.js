import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const SkillPage = () => {
  const { skillId } = useParams();

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Practice {skillId}</Typography>
      <Button variant="contained" color="primary" component={Link} to={`/practice/${skillId}`}>
        Start Practice
      </Button>
    </Container>
  );
};

export default SkillPage;
