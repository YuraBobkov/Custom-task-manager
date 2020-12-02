import React from 'react';
import styled from 'styled-components';

const colorMapping: { [key: string]: string } = {
  running: '#154994',
  failed: '#EE2F39',
  succeed: '#7FAC41',
};

export const StyledLi = styled(({ status, ...other }) => <li {...other} />)`
  margin: 10px 0;
  & > span {
    color: ${(props) => colorMapping[props.status]};
  }
`;
