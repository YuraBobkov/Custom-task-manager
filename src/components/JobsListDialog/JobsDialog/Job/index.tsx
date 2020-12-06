import { useRouterState } from '@routo/react';
import React, { FC } from 'react';
import { useTypedSelector } from 'src/redux';
import { selectById } from 'src/redux/entities/jobs/selectors';

import { StyledLi } from './styled';

type Props = {
  id: string;
};

const Job: FC<Props> = ({ id }) => {
  const { queryParams } = useRouterState();

  const job = useTypedSelector((state) => selectById(state, id))!;

  return (
    <StyledLi status={job.status} lookedJob={queryParams.name === job.name}>
      {job?.name} - <span>{job?.status}</span>
    </StyledLi>
  );
};

export default Job;
