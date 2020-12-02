import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/redux';
import { findJobs } from 'src/redux/entities/jobs/actions';

import { getData, getIsRunning } from 'src/utils/redux-saga-tasks';

export const useFindJobs = (id: string) => {
  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState<number | null>(null);

  useEffect(() => {
    const { meta } = dispatch(findJobs(id));

    setTaskId(meta!.taskId);
  }, [dispatch, id]);

  return {
    jobsIds: useTypedSelector((state) => getData(state, taskId!)),
    isLoading: useTypedSelector((state) => getIsRunning(state, taskId!)),
  };
};
