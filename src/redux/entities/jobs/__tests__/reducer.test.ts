// @ts-nocheck
import slice from '../slice';
import { emptyState } from './test-utils';

describe('Jobs - reducer', () => {
  const reducer = slice.reducer;

  it('should use default state', () => {
    expect(reducer(emptyState, { type: 'LOREM' })).toEqual(emptyState);
  });
});
