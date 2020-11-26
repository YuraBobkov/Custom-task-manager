import { Button } from '@material-ui/core';
import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Table from 'src/components/Table';
import { useTypedSelector } from 'src/redux';
import { findJobs } from 'src/redux/entities/jobs/actions';
import {
  createProcess,
  findProcesses,
} from 'src/redux/entities/processes/actions';
import { selectIds } from 'src/redux/entities/processes/selectors';

import ContentRow from './ContentRow';
import HeadRow from './HeadRow';
import { Page } from './styled';

const Home: FC = () => {
  const dispatch = useDispatch();

  const processesIds = useTypedSelector(selectIds);

  const handleCreateProcess = useCallback(() => dispatch(createProcess()), [
    dispatch,
  ]);

  useEffect(() => {
    dispatch(findJobs('5fbeda95fbb6b7a63db9b26e'));
    dispatch(findProcesses());
  }, [dispatch]);

  return (
    <Page>
      <Button variant="contained" color="primary" onClick={handleCreateProcess}>
        Create Process
      </Button>

      <Table
        aria-label="table"
        ids={processesIds as string[]}
        isLoading={false}
        HeadRow={HeadRow}
        ContentRow={ContentRow}
      />
    </Page>
  );
};

export default Home;
