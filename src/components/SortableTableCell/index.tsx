import { TableCellProps } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons/';
import { useRouterState } from '@routo/react';
import React, { FC, useCallback, useState } from 'react';

import router from 'src/router';

import { StyledSTableCell, ContentWrapper } from './styled';
import { chooseDirection } from './utils';

type Props = TableCellProps & {
  sortName: string;
};

const iconsMapping = {
  des: <ArrowDropUp fontSize="small" />,
  asc: <ArrowDropDown fontSize="small" />,
};

const SortableTableCell: FC<Props> = ({ sortName, children, ...rest }) => {
  const { queryParams, id } = useRouterState();

  const defaultDirection = queryParams ? queryParams[sortName] : null;

  const sortedFields = Object.keys(queryParams);
  const isActive = sortedFields.includes(sortName);

  const [sortDirection, setSortDirection] = useState<'asc' | 'des' | null>(
    defaultDirection,
  );

  const changeDirection = useCallback(() => {
    setSortDirection((currentDirection) => {
      return chooseDirection(currentDirection);
    });

    router.push(id, {
      queryParams: { [sortName]: chooseDirection(sortDirection) },
    });
  }, [sortDirection, sortName, id]);

  return (
    <StyledSTableCell {...rest} onClick={changeDirection}>
      <ContentWrapper>
        {children}
        {(isActive && iconsMapping[sortDirection!]) || null}
      </ContentWrapper>
    </StyledSTableCell>
  );
};

export default SortableTableCell;
