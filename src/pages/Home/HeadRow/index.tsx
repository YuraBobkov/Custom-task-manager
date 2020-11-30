import { TableCell, TableRow } from '@material-ui/core';
import React, { FC } from 'react';

const HeadRow: FC = () => (
  <TableRow>
    <TableCell align="left">Name</TableCell>
    <TableCell align="center">Jobs count</TableCell>
    <TableCell align="right">Actions</TableCell>
  </TableRow>
);

export default HeadRow;
