import { TableCell, TableRow } from '@material-ui/core';
import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import RemoveButton from 'src/components/RemoveButton';
import { useTypedSelector } from 'src/redux';
import { deleteProcess } from 'src/redux/entities/processes/actions';
import { selectById } from 'src/redux/entities/processes/selectors';

type Props = {
  id: string;
};

const ContentRow: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleDeleteProcess = useCallback(() => dispatch(deleteProcess(id)), [
    dispatch,
    id,
  ]);

  const process = useTypedSelector((state) => selectById(state, id))!;

  return (
    <>
      <TableRow hover selected={open}>
        <TableCell>{process.name}</TableCell>
        <TableCell align="center">{process.jobsCount}</TableCell>
        <TableCell padding="none" align="right">
          <RemoveButton action={handleDeleteProcess} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ContentRow;
