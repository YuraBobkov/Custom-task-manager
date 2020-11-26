import { IconButton, TableCell, TableRow } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
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
        <TableCell padding="none">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{process.name}</TableCell>
        <TableCell>{process.jobsCount}</TableCell>
        <TableCell padding="none" align="right">
          <RemoveButton action={handleDeleteProcess} />
        </TableCell>
      </TableRow>
    </>
  );
};

export default ContentRow;
