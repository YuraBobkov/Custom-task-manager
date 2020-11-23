import adapter from './adapter';

import { RootState } from 'src/redux';

export const { selectById, selectIds } = adapter.getSelectors(
  (state: RootState) => state.entities.processes,
);
