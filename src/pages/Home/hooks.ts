import { useRouterState } from '@routo/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/redux';
import { findProcesses } from 'src/redux/entities/processes/actions';
import { getIsRunning } from 'src/utils/redux-saga-tasks';

export const useData = () => {
  const { queryParams } = useRouterState();

  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState<number | null>(null);
  const sortParams = queryParams.sort;

  useEffect(() => {
    const { meta } = dispatch(findProcesses(sortParams));

    setTaskId(meta!.taskId);
  }, [dispatch, sortParams]);

  return {
    isLoading: useTypedSelector((state) => getIsRunning(state, taskId!)),
  };
};
