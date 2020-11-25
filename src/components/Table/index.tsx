import React, { FC, ElementType } from 'react';
import {
  CircularProgress,
  TableBody,
  TableHead,
  TableProps,
  TableContainer,
  Paper,
} from '@material-ui/core';

import {
  CircularProgressWrapper,
  StyledTable,
  StyledTypography,
} from './styled';

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
  if ((isLoading && Boolean(ids)) || !ids.length) {
    return (
      <CircularProgressWrapper>
        <CircularProgress />
      </CircularProgressWrapper>
    );
  }

  if (!ids.length) {
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
    </TableContainer>
  );
};

export default Table;
