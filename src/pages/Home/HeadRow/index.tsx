import { TableRow, TableCell } from '@material-ui/core';
import React, { FC } from 'react';

import SortableTableCell from 'src/components/SortableTableCell';

const HeadRow: FC = () => {
  return (
    <TableRow>
      <TableCell align="center">Status</TableCell>
      <SortableTableCell sortName="name" align="left">
        Name
      </SortableTableCell>
      <SortableTableCell sortName="startTime">Start time</SortableTableCell>
      <SortableTableCell sortName="jobsCount" align="center">
        Jobs count
      </SortableTableCell>
      <TableCell align="right">Actions</TableCell>
    </TableRow>
  );
};

export default HeadRow;
