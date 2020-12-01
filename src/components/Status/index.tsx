import React, { FC } from 'react';
import {
  CheckCircleOutline,
  HighlightOff,
  HelpOutlineRounded,
  WatchLaterOutlined,
} from '@material-ui/icons';

import { StyledWrapper } from './styled';

type Props = {
  status: 'pending' | 'inProgress' | 'failed' | 'finished';
};

const mapping = {
  pending: HelpOutlineRounded,
  inProgress: WatchLaterOutlined,
  failed: HighlightOff,
  finished: CheckCircleOutline,
};

const Status: FC<Props> = ({ status }) => {
  const Icon = mapping[status];

  return (
    <StyledWrapper status={status}>
      <Icon color="inherit" />
    </StyledWrapper>
  );
};

export default Status;
