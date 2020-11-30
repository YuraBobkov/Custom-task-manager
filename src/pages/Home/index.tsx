import { Button } from '@material-ui/core';
import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Table from 'src/components/Table';
import { useTypedSelector } from 'src/redux';
import { createProcess } from 'src/redux/entities/processes/actions';
import { selectIds } from 'src/redux/entities/processes/selectors';

import ContentRow from './ContentRow';
import HeadRow from './HeadRow';
import { useData } from './hooks';
import { Page } from './styled';

const Home: FC = () => {
  const dispatch = useDispatch();
  const { isLoading } = useData();
  const processesIds = useTypedSelector(selectIds);

  const handleCreateProcess = useCallback(() => dispatch(createProcess()), [
    dispatch,
  ]);

  return (
    <Page>
      <Button variant="contained" color="primary" onClick={handleCreateProcess}>
        Create Process
      </Button>

      <Table
        aria-label="table"
        ids={processesIds as string[]}
        isLoading={isLoading}
        HeadRow={HeadRow}
        ContentRow={ContentRow}
      />
    </Page>
  );
};

export default Home;
