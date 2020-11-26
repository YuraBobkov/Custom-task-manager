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

type Props = {
  action(): void;
};

const RemoveButton: FC<Props> = ({ action }) => {
  const [open, setOpen] = useState(false);

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
      action();
    },
    [action],
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
          <Button onClick={handleSubmit} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default RemoveButton;
