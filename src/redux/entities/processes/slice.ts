import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { saveEntities } from '../actions';
import { Entities } from '../types';
import adapter from './adapter';

export default createSlice({
  name: 'entities/processes',
  initialState: adapter.getInitialState(),
  reducers: {
    deleteProcess: adapter.removeOne,
  },
  extraReducers: (builder) => {
    builder.addCase(
      saveEntities.type,
      (state, action: PayloadAction<Entities>) =>
        action.payload.processes
          ? adapter.setAll(state, action.payload.processes)
          : state,
    );
  },
});
