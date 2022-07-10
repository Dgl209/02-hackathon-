import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    entity: null,
    loading: false,
  },
  reducers: {
    requested: (state) => {
      state.loading = true;
    },
    received: (state, action) => {
      state.entity = action.payload;
      state.loading = false;
    },
    failed: (state) => {
      state.loading = false;
    },
    created: (state, action) => {
      state.entity = action.payload;
      state.loading = false;
    },
    removed: (state) => {
      state.entity = null;
    },
    updated: (state, action) => {
      state.entity = action.payload;
    },
  },
});

export default accountSlice;
