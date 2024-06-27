import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user:null,
  errors:null
};

export const authSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state,action) => {
        state.user = action.payload;
    },
  },
});

export const { setMode } = authSlice.actions;

export default authSlice.reducer;