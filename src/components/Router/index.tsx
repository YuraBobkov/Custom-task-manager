import { useRouterState } from '@routo/react';
import React, { FC, useEffect } from 'react';

import Home from 'src/pages/Home';
import { HOME } from 'src/router/ids';

type Mapping = { [id: string]: FC };

const mapping: Mapping = {
  [HOME]: Home,
};

const Router: FC = () => {
  const { id } = useRouterState();
  const Component = mapping[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return <Component />;
};

export default Router;
