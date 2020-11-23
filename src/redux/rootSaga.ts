import { spawn } from 'redux-saga/effects';

import entitiesSaga from './entities/saga';

function* rootSaga() {
  yield spawn(entitiesSaga);
}

export default rootSaga;
