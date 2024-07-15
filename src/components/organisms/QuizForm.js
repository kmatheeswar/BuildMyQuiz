import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container } from '@mui/material';
import QuizQuestion from '../molecules/QuizQuestion';
import Button from '../atoms/Button';
import Typography from '../atoms/Typography';

const QuizForm = ({ onSubmit, questions }) => {
    const initialValues = questions.reduce((values, question) => {
        values[question.name] = '';
        return values;
    }, {});

    const validationSchema = Yup.object(questions.reduce((schema, question) => {
        schema[question.name] = Yup.string().required(`${question.label} is required`);
        return schema;
    }, {}));

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Quiz Form
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isValid }) => (
                    <Form>
                        {questions.map(question => (
                            <QuizQuestion
                                key={question.name}
                                name={question.name}
                                label={question.label}
                                type={question.type}
                                options={question.options}
                            />
                        ))}
                        <Button type="submit" variant="contained" color="primary" disabled={!isValid}>
                            Submit
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default QuizForm;
