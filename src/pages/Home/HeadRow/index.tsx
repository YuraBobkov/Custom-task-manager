import { TableCell, TableRow } from '@material-ui/core';
import React, { FC } from 'react';

const HeadRow: FC = () => (
  <TableRow>
    <TableCell padding="none" />
    <TableCell align="left">Name</TableCell>
    <TableCell>Jobs count</TableCell>
    <TableCell align="right">Actions</TableCell>
  </TableRow>
);

export default HeadRow;
