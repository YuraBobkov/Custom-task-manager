import adapter from './adapter';

import { RootState } from 'src/redux';

export const { selectIds, selectById } = adapter.getSelectors(
  (state: RootState) => state.entities.jobs,
);
