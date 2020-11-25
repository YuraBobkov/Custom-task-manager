import { TableCell, TableRow } from '@material-ui/core';
import React, { FC } from 'react';

const HeadRow: FC = () => (
  <TableRow>
    <TableCell align="left">Name</TableCell>
    <TableCell>Jobs count</TableCell>
  </TableRow>
);

export default HeadRow;
