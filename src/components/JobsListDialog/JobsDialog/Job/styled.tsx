import React from 'react';
import styled from 'styled-components';

const colorMapping: { [key: string]: string } = {
  running: '#154994',
  failed: '#EE2F39',
  succeed: '#7FAC41',
};

export const StyledLi = styled(({ status, lookedJob, ...other }) => (
  <li {...other} />
))`
  padding: 5px 0;
  background-color: ${(props) =>
    props.lookedJob ? 'rgba(0, 0, 0, 0.09)' : 'inherit'};

  & > span {
    color: ${(props) => colorMapping[props.status]};
  }
`;
