import { selectById } from '../selectors';
import { createState, emptyState, job, id } from './test-utils';

describe('jobs - selectors', () => {
  it('selectById', () => {
    const state = createState(job);

    expect(selectById(state, id)).toBe(job);
    expect(selectById(state, '5fcc2b7ca92b731aabb45d9c')).toBe(undefined);
    expect(selectById(emptyState, id)).toBe(undefined);
  });
});
