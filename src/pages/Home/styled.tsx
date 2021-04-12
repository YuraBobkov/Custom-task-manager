import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const Page = styled.main`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 40px;
  padding-right: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const StyledButton = styled(Button)`
  margin-bottom: 0;

  @media (max-width: 560px) {
    margin-bottom: 16px !important;
  }
`;
