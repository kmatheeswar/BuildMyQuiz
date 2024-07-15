import React from 'react';
import QuizForm from '../organisms/QuizForm';
import QuizSummary from '../organisms/QuizSummary';

const QuizTemplate = ({ onSubmit, questions, correctAnswers, totalQuestions, onRetake }) => {
    return (
        <div>
            {questions ? (
                <QuizForm onSubmit={onSubmit} questions={questions} />
            ) : (
                <QuizSummary correctAnswers={correctAnswers} totalQuestions={totalQuestions} onRetake={onRetake} />
            )}
        </div>
    );
};

export default QuizTemplate;
