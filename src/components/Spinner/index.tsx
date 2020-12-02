import { CircularProgress } from '@material-ui/core';
import React, { FC } from 'react';
import { StyledSpinnerWrapper } from './styled';

const Spinner: FC = () => {
  return (
    <StyledSpinnerWrapper>
      <CircularProgress />
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
