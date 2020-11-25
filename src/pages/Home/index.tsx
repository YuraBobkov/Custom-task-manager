import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Table from 'src/components/Table';
import { useTypedSelector } from 'src/redux';
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
    dispatch(findProcesses());
  }, [dispatch]);

  return (
    <Page>
      <button onClick={handleCreateProcess}>handleCreateProcess</button>

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
