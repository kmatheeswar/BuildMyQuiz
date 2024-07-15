import React from 'react';
import { Field, ErrorMessage } from 'formik';
import InputField from '../atoms/InputField';
import SelectField from '../atoms/SelectField';

const QuizQuestion = ({ name, label, type = "text", options }) => {
    return (
        <div>
            {type === "select" ? (
                <Field name={name} as={SelectField} label={label} options={options} />
            ) : (
                <Field name={name} as={InputField} label={label} type={type} />
            )}
            <ErrorMessage name={name} component="div" />
        </div>
    );
};

export default QuizQuestion;
