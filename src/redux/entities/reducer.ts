import { combineReducers } from '@reduxjs/toolkit';

import processesSlice from './processes/slice';
import jobsSlice from './jobs/slice';

export default combineReducers({
  processes: processesSlice.reducer,
  jobs: jobsSlice.reducer,
});
