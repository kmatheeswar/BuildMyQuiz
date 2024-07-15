import React from 'react';
import { TextField } from '@mui/material';

const InputField = ({ label, ...props }) => {
    return <TextField label={label} fullWidth margin="normal" {...props} />;
};

export default InputField;
