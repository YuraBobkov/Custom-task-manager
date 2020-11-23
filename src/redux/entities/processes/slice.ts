import { createSlice } from '@reduxjs/toolkit';

import adapter from './adapter';

export default createSlice({
  name: 'entities/processes',
  initialState: adapter.getInitialState(),
  reducers: {
    findProcesses: adapter.setAll,
    findProcess: adapter.upsertOne,
    createProcess: adapter.addOne,
    deleteProcess: adapter.removeOne,
    updateProcess: adapter.updateOne,
  },
});
