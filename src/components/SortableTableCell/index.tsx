import { TableCellProps } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons/';
import { useRouter, useRouterState } from '@routo/react';
import React, { FC, useCallback, useState } from 'react';

import { ContentWrapper, StyledSTableCell } from './styled';
import { chooseDirection } from './utils';

type Props = TableCellProps & {
  sortName: string;
};

const iconsMapping = {
  asc: <ArrowDropUp fontSize="small" />,
  des: <ArrowDropDown fontSize="small" />,
};

const SortableTableCell: FC<Props> = ({ sortName, children, ...rest }) => {
  const router = useRouter();
  const { queryParams, id } = useRouterState();

  const defaultDirection = queryParams.sort ? queryParams.sort[sortName] : null;

  const sortedFields = queryParams.sort ? Object.keys(queryParams.sort) : [];
  const isActive = sortedFields.includes(sortName);

  const [sortDirection, setSortDirection] = useState<'asc' | 'des' | null>(
    defaultDirection,
  );

  const changeDirection = useCallback(() => {
    setSortDirection((currentDirection) => {
      return chooseDirection(currentDirection);
    });

    const nextDirection = chooseDirection(sortDirection);
    const query = nextDirection ? { sort: { [sortName]: nextDirection } } : {};

    router.push(id, {
      queryParams: query,
    });
  }, [sortDirection, sortName, id, router]);

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
