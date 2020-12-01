import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'src/redux';
import { findProcesses } from 'src/redux/entities/processes/actions';
import { getData, getIsRunning } from 'src/utils/redux-saga-tasks';

export const useData = () => {
  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState<number | null>(null);

  useEffect(() => {
    const { meta } = dispatch(findProcesses());

    setTaskId(meta!.taskId);
  }, [dispatch]);

  return {
    isLoading: useTypedSelector((state) => getIsRunning(state, taskId!)),
    data: useTypedSelector((state) => getData(state, taskId!)),
  };
};
