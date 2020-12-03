import React, { FC, ElementType } from 'react';
import {
  TableBody,
  TableHead,
  TableProps,
  TableContainer,
  Paper,
} from '@material-ui/core';

import { StyledTable, StyledTypography } from './styled';
import Spinner from '../Spinner';

type Props = TableProps & {
  isLoading: boolean;
  ids: string[];
  HeadRow: ElementType;
  ContentRow: ElementType;
};

const Table: FC<Props> = ({
  isLoading = false,
  HeadRow,
  ContentRow,
  ids,
  ...tableProps
}) => {
  if (!ids.length) {
    return <Spinner />;
  }

  if (!ids) {
    return (
      <StyledTypography variant="h5" color="textSecondary">
        No items
      </StyledTypography>
    );
  }

  return (
    <TableContainer component={Paper}>
      <StyledTable {...tableProps} isLoading={isLoading}>
        <TableHead>
          <HeadRow />
        </TableHead>
        <TableBody>
          {ids.map((id) => (
            <ContentRow key={id} id={id} />
          ))}
        </TableBody>
      </StyledTable>
      {isLoading && <Spinner />}
    </TableContainer>
  );
};

export default Table;
