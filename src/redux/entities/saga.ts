import { spawn } from 'redux-saga/effects';

import processes from './processes/saga';

export default function* entitiesSaga() {
  yield spawn(processes);
}
