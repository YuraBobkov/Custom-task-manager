import { IconButton, IconButtonProps } from '@material-ui/core';
import { FormatListBulletedRounded } from '@material-ui/icons';
import { useRouter, useRouterState } from '@routo/react';
import React, { FC, Fragment, useCallback, useState, useEffect } from 'react';
import { merge, omit } from 'remeda';

import Dialog from 'src/components/Dialog';
import { HOME } from 'src/router/ids';

import JobsDialog from './JobsDialog';

type Props = IconButtonProps & {
  id: string;
};

const JobsListDialog: FC<Props> = ({ id, ...rest }) => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { queryParams } = useRouterState();

  const handleOpen = useCallback(() => {
    setOpen(true);
    router.replace(HOME, { queryParams: merge(queryParams, { id }) });
  }, [router, id, queryParams]);

  const handleClose = useCallback(() => {
    setOpen(false);
    router.replace(HOME, { queryParams: omit(queryParams, ['id', 'name']) });
  }, [router, queryParams]);

  useEffect(() => (queryParams.id === id ? setOpen(true) : undefined), [
    queryParams.id,
    id,
  ]);

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
