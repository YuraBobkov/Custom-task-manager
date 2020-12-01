import React from 'react';
import styled from 'styled-components';

const colorMapping: { [key: string]: string } = {
  pending: '#F58A0B',
  inProgress: '#154994',
  failed: '#EE2F39',
  finished: '#7FAC41',
};

export const StyledWrapper = styled(({ status, ...otherProps }) => (
  <div {...otherProps} />
))`
  color: ${(props) => colorMapping[props.status]};
`;
