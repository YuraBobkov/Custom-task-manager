import { selectById, selectIds } from '../selectors';

import { createState, emptyState, process, id } from './test-utils';

describe('processes - selectors', () => {
  it('selectById', () => {
    const state = createState(process);

    expect(selectById(state, id)).toBe(process);
    expect(selectById(state, '234f2')).toBe(undefined);
    expect(selectById(emptyState, id)).toBe(undefined);
  });

  it('selectIds', () => {
    const state = createState(process);

    expect(selectIds(state)).toStrictEqual([id]);
    expect(selectIds(emptyState)).toStrictEqual([]);
  });
});
