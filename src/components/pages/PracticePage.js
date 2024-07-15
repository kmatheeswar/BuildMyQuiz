import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';

const questions = [
  { id: 1, question: 'What is 2 + 2?', correctAnswer: '4', skillId: 1 },
  { id: 2, question: 'What is 3 + 5?', correctAnswer: '8', skillId: 1 },
  // Add more questions
];

const PracticePage = () => {
  const { practiceId } = useParams();
  const filteredQuestions = questions.filter(q => q.skillId === parseInt(practiceId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer === filteredQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCompleted(true);
    }
    setUserAnswer('');
  };

  if (completed) {
    return (
      <Container>
        <Typography variant="h3">Your Score: {score}/{filteredQuestions.length}</Typography>
        <Button variant="contained" color="primary" href="/">Go to Home</Button>
      </Container>
    );
  }

  return (
    <Container>
      <Paper style={{ padding: '16px' }}>
        <Typography variant="h5">{filteredQuestions[currentQuestionIndex].question}</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default PracticePage;
