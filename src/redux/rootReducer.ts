import { combineReducers } from '@reduxjs/toolkit';
import { createReducer } from '@routo/redux';

import entities from './entities/reducer';
import tasks from 'src/utils/redux-saga-tasks/reducer';
import router from 'src/router';

export default combineReducers({
  entities,
  tasks,
  router: createReducer(router),
});
