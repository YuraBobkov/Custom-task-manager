import { call, put } from 'redux-saga/effects';
import { pick } from 'remeda';

import { failure, start, success } from './actions';
import { ActionType } from './utils';

const defaultParseError = (err: Error): Partial<Error> | null =>
  err ? pick(err, ['name', 'message', 'stack']) : null;

const createTaskSaga = (
  saga: any,
  options: { parseError?: () => Partial<Error> } = {},
) =>
  function* taskSaga(action: ActionType) {
    const { parseError = defaultParseError } = options;
    const { taskId } = action.meta!;

    yield put(start({ id: taskId }));

    try {
      const data = yield call(saga, action);

      yield put(success({ id: taskId, data }));
    } catch (err) {
      yield put(
        failure({
          id: taskId,
          error: parseError(err),
        }),
      );
    }

    return null;
  };

export default createTaskSaga;
