import { combineReducers } from '@reduxjs/toolkit';

import entities from './entities/reducer';
import tasks from 'src/utils/redux-saga-tasks/reducer';

export default combineReducers({
  entities,
  tasks,
});
