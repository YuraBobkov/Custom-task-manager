import { TableCell, TableRow } from '@material-ui/core';
import React, { FC, useCallback } from 'react';

import RemoveButton from 'src/components/RemoveButton';
import JobsListDialog from 'src/components/JobsListDialog';
import Status from 'src/components/Status';

import { useTypedSelector } from 'src/redux';
import { deleteProcess } from 'src/redux/entities/processes/actions';
import { selectById } from 'src/redux/entities/processes/selectors';

import { toLocalDateTime } from 'src/utils/formats';

type Props = {
  id: string;
};

const ContentRow: FC<Props> = ({ id }) => {
  const handleDeleteProcess = useCallback(() => deleteProcess(id), [id]);

  const process = useTypedSelector((state) => selectById(state, id))!;

  return (
    <>
      <TableRow hover>
        <TableCell padding="none" align="center">
          <Status status={process.status} />
        </TableCell>
        <TableCell>{process.name}</TableCell>
        <TableCell>{toLocalDateTime(process.startTime)}</TableCell>
        <TableCell align="center">{process.jobsCount}</TableCell>
        <TableCell padding="none" align="right">
          <JobsListDialog id={id} />
          <RemoveButton action={handleDeleteProcess} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ContentRow;
