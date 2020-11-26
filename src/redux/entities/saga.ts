import { spawn } from 'redux-saga/effects';

import processesSaga from './processes/saga';
import jobsSaga from './jobs/saga';

export default function* entitiesSaga() {
  yield spawn(processesSaga);
  yield spawn(jobsSaga);
}
