import { TableCell, TableRow } from '@material-ui/core';

import React, { FC } from 'react';

import { useTypedSelector } from 'src/redux';
import { selectById } from 'src/redux/entities/processes/selectors';

type Props = {
  id: string;
};

const ContentRow: FC<Props> = ({ id }) => {
  const process = useTypedSelector((state) => selectById(state, id))!;

  return (
    <>
      <TableRow hover>
        <TableCell>{process.name}</TableCell>
        <TableCell>{process.jobsCount}</TableCell>
      </TableRow>
    </>
  );
};

export default ContentRow;
