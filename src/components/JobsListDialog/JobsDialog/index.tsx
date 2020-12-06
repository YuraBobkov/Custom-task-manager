import { DialogTitle } from '@material-ui/core';
import React, { FC } from 'react';
import DialogContent from 'src/components/DialogContent';
import Spinner from 'src/components/Spinner';
import { useTypedSelector } from 'src/redux';
import { selectById } from 'src/redux/entities/processes/selectors';

import { useFindJobs } from './hooks';
import Job from './Job';
import { StyledList } from './styled';

type Props = {
  id: string;
};

const JobsDialog: FC<Props> = ({ id }) => {
  const { isLoading, data } = useFindJobs(id);
  const process = useTypedSelector((state) => selectById(state, id));

  if (isLoading || !data?.jobsIds) {
    return <Spinner />;
  }

  return (
    <>
      <DialogTitle>{process?.name} - Jobs list</DialogTitle>
      <DialogContent>
        <StyledList>
          {data.jobsIds.map((id: string) => (
            <Job key={id} id={id} />
          ))}
        </StyledList>
      </DialogContent>
    </>
  );
};

export default JobsDialog;
