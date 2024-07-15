import React from 'react';
import QuizResult from '../molecules/QuizResult';
import Button from '../atoms/Button';

const QuizSummary = ({ correctAnswers, totalQuestions, onRetake }) => {
    return (
        <div>
            <QuizResult correctAnswers={correctAnswers} totalQuestions={totalQuestions} />
            <Button onClick={onRetake} variant="contained" color="primary">
                Retake Quiz
            </Button>
        </div>
    );
};

export default QuizSummary;
