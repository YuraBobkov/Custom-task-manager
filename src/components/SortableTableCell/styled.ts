import { TableCell } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSTableCell = styled(TableCell)`
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
`;
