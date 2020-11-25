import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { saveEntities } from '../actions';
import { Entities } from '../types';
import adapter from './adapter';

export default createSlice({
  name: 'entities/jobs',
  initialState: adapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      saveEntities.type,
      (state, action: PayloadAction<Entities>) =>
        action.payload.jobs
          ? adapter.upsertMany(state, action.payload.jobs)
          : state,
    );
  },
});
