import { useRouterState } from '@routo/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/redux';
import { findProcesses } from 'src/redux/entities/processes/actions';
import { getIsRunning } from 'src/utils/redux-saga-tasks';
import usePolling from 'src/utils/usePolling';

export const useData = () => {
  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState<number | null>(null);
  const { queryParams } = useRouterState();
  const sortParams = queryParams.sort;

  usePolling(findProcesses(sortParams), 1000 * 60 * 10);

  useEffect(() => {
    const { meta } = dispatch(findProcesses(sortParams));

    setTaskId(meta!.taskId);
  }, [dispatch, sortParams]);

  return {
    isLoading: useTypedSelector((state) => getIsRunning(state, taskId!)),
  };
};
