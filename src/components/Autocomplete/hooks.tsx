import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/redux';
import { findJob, findJobs } from 'src/redux/entities/jobs/actions';
import { Job } from 'src/redux/entities/jobs/types';
import { getData } from 'src/utils/redux-saga-tasks';

export const useData = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [taskId, setTaskId] = useState<number | null>(null);
  const [options, setOptions] = useState<string[]>([]);

  const data = useTypedSelector((state) => getData(state, taskId!));

  useEffect(() => {
    let active = true;

    if (!(open && options.length === 0)) {
      return undefined;
    }

    const { meta } = dispatch(findJobs());
    setTaskId(meta!.taskId);

    (() => {
      if (active) {
        setOptions(data ? data.jobsNames : []);
      }
    })();

    return () => {
      active = false;
    };
  }, [data, dispatch, open, options.length]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return {
    setOpen,
    open,
    options,
  };
};

export const useFindJob = () => {
  const dispatch = useDispatch();
  const [taskId, setTaskId] = useState<number | null>(null);
  const searchedJob: Job = useTypedSelector((state) => getData(state, taskId!));

  const handleChange = useCallback(
    (event, value: string | null, reason) => {
      if (reason === 'select-option') {
        const { meta } = dispatch(findJob({ name: value }));

        setTaskId(meta!.taskId);
      }
    },
    [dispatch],
  );

  return { handleChange, searchedJob };
};
