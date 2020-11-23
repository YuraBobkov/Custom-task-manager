import { createSlice } from '@reduxjs/toolkit';

import adapter from './adapter';

export default createSlice({
  name: 'entities/jobs',
  initialState: adapter.getInitialState(),
  reducers: {},
});
