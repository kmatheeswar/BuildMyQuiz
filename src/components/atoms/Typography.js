import React from 'react';
import { Typography as MuiTypography } from '@mui/material';

const Typography = ({ children, variant, ...props }) => {
    return <MuiTypography variant={variant} {...props}>{children}</MuiTypography>;
};

export default Typography;
