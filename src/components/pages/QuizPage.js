import React, { useState } from 'react';
import QuizTemplate from '../templates/QuizTemplate';
import QuizList from '../organisms/QuizList';

const quizzes = [
    { id: 1, title: 'Math Quiz', questions: [{ name: 'q1', label: 'What is 2 + 2?', type: 'text' }] },
    { id: 2, title: 'Science Quiz', questions: [{ name: 'q1', label: 'What planet is closest to the sun?', type: 'select', options: [{ value: 'mercury', label: 'Mercury' }, { value: 'venus', label: 'Venus' }] }] }
];

const QuizPage = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);

    const handleFormSubmit = (values) => {
        const correct = selectedQuiz.questions.filter(question => {
            // Add your correct answer validation logic here
            return values[question.name] === '4'; // Example logic for the Math Quiz
        }).length;
        setCorrectAnswers(correct);
        setTotalQuestions(selectedQuiz.questions.length);
        setSelectedQuiz(null);
    };

    const handleRetakeQuiz = () => {
        setCorrectAnswers(0);
        setTotalQuestions(0);
        setSelectedQuiz(null);
    };

    return (
        <div>
            {!selectedQuiz ? (
                <QuizList quizzes={quizzes} onSelectQuiz={(quizId) => setSelectedQuiz(quizzes.find(quiz => quiz.id === quizId))} />
            ) : (
                <QuizTemplate
                    onSubmit={handleFormSubmit}
                    questions={selectedQuiz.questions}
                    correctAnswers={correctAnswers}
                    totalQuestions={totalQuestions}
                    onRetake={handleRetakeQuiz}
                />
            )}
        </div>
    );
};

export default QuizPage;
