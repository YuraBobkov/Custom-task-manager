import React, { FC } from 'react';
import { Box } from '@material-ui/core';

const DialogContent: FC = ({ children }) => <Box flexGrow={1}>{children}</Box>;

export default DialogContent;
