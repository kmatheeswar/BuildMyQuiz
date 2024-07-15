import React from 'react';
import { TextField, MenuItem } from '@mui/material';

const SelectField = ({ label, options, ...props }) => {
    return (
        <TextField
            select
            label={label}
            fullWidth
            margin="normal"
            {...props}
        >
            {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default SelectField;
