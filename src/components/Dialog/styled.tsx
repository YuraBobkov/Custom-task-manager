import { IconButton, Dialog as MuiDialog } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const StyledRoot = styled(({ ...other }) => (
  <MuiDialog {...other} classes={{ paper: 'paper' }} />
))`
  .paper {
    flex-basis: 100%;
    position: relative;
  }
`;
export const StyledIconButton = styled(({ ...other }) => (
  <IconButton {...other} />
))`
  &.MuiButtonBase-root {
    position: absolute;
    right: 4px;
    top: 4px;
    z-index: 2;
    color: inherit;
  }

  '&:hover' {
    opacity: 0.8;
  }
`;

export const StyledWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 24px;
  }
`;
