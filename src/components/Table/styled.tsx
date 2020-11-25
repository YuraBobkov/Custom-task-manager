import { Table, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const CircularProgressWrapper = styled.div`
  display: flex,
  justify-content: center,
  padding: 32px 0,
`;

export const StyledTypography = styled(Typography)`
  display: flex,
  justify-content: center,
  padding: 32px 0,
`;

export const StyledTable = styled(({ isLoading, ...otherProps }) => (
  <Table {...otherProps} />
))`
  opacity: ${(props) => (props.isLoading ? 0.3 : 1)},
  pointer-events: ${(props) => props.isLoading && 'none'},
`;
