import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import Typography from '../atoms/Typography';

const QuizList = ({ quizzes, onSelectQuiz }) => {
    return (
        <div>
            <Typography variant="h5">Available Quizzes</Typography>
            <List>
                {quizzes.map(quiz => (
                    <ListItem button key={quiz.id} onClick={() => onSelectQuiz(quiz.id)}>
                        <ListItemText primary={quiz.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default QuizList;
