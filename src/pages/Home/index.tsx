import { Box, Button } from '@material-ui/core';
import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import Autocomplete from 'src/components/Autocomplete';
import Table from 'src/components/Table';

import { useTypedSelector } from 'src/redux';
import { createProcess } from 'src/redux/entities/processes/actions';
import { selectIds } from 'src/redux/entities/processes/selectors';
import { getIsRunning } from 'src/utils/redux-saga-tasks';

import ContentRow from './ContentRow';
import HeadRow from './HeadRow';
import { useData } from './hooks';
import { Page, Wrapper } from './styled';

const Home: FC = () => {
  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState<number | null>(null);
  const inProgress = useTypedSelector((state) => getIsRunning(state, taskId!));

  const { isLoading } = useData();
  const processesIds = useTypedSelector(selectIds);

  const handleCreateProcess = useCallback(() => {
    const { meta } = dispatch(createProcess());
    setTaskId(meta!.taskId);
  }, [dispatch]);

  return (
    <Page>
      <Box clone mb={2}>
        <Wrapper>
          <Button
            variant="contained"
            color="primary"
            disabled={inProgress}
            onClick={handleCreateProcess}
          >
            Create Process
          </Button>
          <Autocomplete />
        </Wrapper>
      </Box>
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
