import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { FC, Fragment, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/redux';
import { getIsRunning } from 'src/utils/redux-saga-tasks';
import { ActionType } from 'src/utils/redux-saga-tasks/utils';

type Props = {
  action: () => ActionType;
};

const RemoveButton: FC<Props> = ({ action }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [taskId, setTaskId] = useState<number | null>(null);

  const isRunning = useTypedSelector((state) => getIsRunning(state, taskId!));

  const handleOpen = useCallback((event) => {
    event.stopPropagation();
    return setOpen(true);
  }, []);

  const handleClose = useCallback((event) => {
    event.stopPropagation();
    return setOpen(false);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.stopPropagation();
      const { meta } = dispatch(action());

      setTaskId(meta!.taskId);
    },
    [dispatch, action],
  );

  return (
    <Fragment>
      <IconButton onClick={handleOpen}>
        <Delete />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Deleting</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Do you really want to delete this process?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary" disabled={isRunning}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default RemoveButton;
