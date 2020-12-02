import React, { FC } from 'react';
import { DialogProps } from '@material-ui/core';

import CloseIcon from './CloseIcon';
import { StyledRoot, StyledWrapper, StyledIconButton } from './styled';

type Props = DialogProps & {
  onClose(event: any): void;
  open: boolean;
};

const Dialog: FC<Props> = ({ children, open, onClose }) => {
  return (
    <StyledRoot open={open} onClose={onClose}>
      <StyledWrapper>
        <StyledIconButton onClick={onClose} size="small">
          <CloseIcon />
        </StyledIconButton>
        {children}
      </StyledWrapper>
    </StyledRoot>
  );
};

export default Dialog;
