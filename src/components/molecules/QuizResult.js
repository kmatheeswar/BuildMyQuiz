import React from 'react';
import Typography from '../atoms/Typography';

const QuizResult = ({ correctAnswers, totalQuestions }) => {
    return (
        <div>
            <Typography variant="h5">Quiz Results</Typography>
            <Typography variant="body1">You answered {correctAnswers} out of {totalQuestions} questions correctly.</Typography>
        </div>
    );
};

export default QuizResult;
