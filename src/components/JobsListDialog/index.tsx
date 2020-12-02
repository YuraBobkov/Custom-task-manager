import { IconButton, IconButtonProps } from '@material-ui/core';
import { FormatListBulletedRounded } from '@material-ui/icons';
import React, { FC, Fragment, useCallback, useState } from 'react';

import Dialog from 'src/components/Dialog';

import JobsDialog from './JobsDialog';

type Props = IconButtonProps & {
  id: string;
};

const JobsListDialog: FC<Props> = ({ id, ...rest }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback((event) => {
    event.stopPropagation();
    return setOpen(true);
  }, []);

  const handleClose = useCallback((event) => {
    event.stopPropagation();
    return setOpen(false);
  }, []);

  return (
    <Fragment>
      <IconButton {...rest} onClick={handleOpen}>
        <FormatListBulletedRounded />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <JobsDialog id={id} />
      </Dialog>
    </Fragment>
  );
};

export default JobsListDialog;
