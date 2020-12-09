// @ts-nocheck
import slice from '../slice';
import { emptyState } from './test-utils';

describe('Processes - reducer', () => {
  const { reducer, caseReducers } = slice;

  it('should use default state', () => {
    expect(reducer(emptyState, { type: 'LOREM' })).toEqual(emptyState);
  });

  it('should include the deleteProcess case reducers', () => {
    expect(caseReducers).toBeTruthy();
    expect(caseReducers.deleteProcess).toBeTruthy();
    expect(typeof caseReducers.deleteProcess).toBe('function');
  });

  it('should include the saveProcess case reducers', () => {
    expect(caseReducers).toBeTruthy();
    expect(caseReducers.saveProcess).toBeTruthy();
    expect(typeof caseReducers.saveProcess).toBe('function');
  });
});
